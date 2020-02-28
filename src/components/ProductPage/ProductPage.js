import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import axios from '../../config/axiosAdidas';
import Product from './Product';

export const MyContext = React.createContext();

const ProductPage = ({ history }) => {

    const [ activeProduct, setActiveProduct] = useState({});

    useEffect(() => {
        const config = {
            params: {
                query: 'men-running-shoes'
            }
        };

        async function getRandomProduct () {
            const { data: dataProducts } = await axios.get('/search/tf/taxonomy', config);
            const items = dataProducts.itemList.items;
            const productIds = items
                .filter(item => (item.previewTo && Date.parse(item.previewTo) < new Date()))
                .map(item => item.productId);
            const productId = Math.floor(Math.random() * productIds.length);

            const { data: dataProduct} = await axios.get(`/products/${productIds[productId]}`);

            const { data: dataProductAvailability} = await axios.get(`/products/${productIds[productId]}/availability`);

            const sku = getSku(dataProductAvailability);

            return getProduct(dataProduct, sku);
        }

        getRandomProduct()
            .then(data => setActiveProduct(data));
        ;
    }, []);

    const getSku = ({ variation_list  = [] }) => {
        return variation_list
            .filter(variation => variation.availability_status === 'IN_STOCK')
            .map(({ sku, size }) => {
                return {
                    size,
                    sku
                }
            });
    }

    const getProduct = (dataProduct, sku) => {
        return {
            brand: dataProduct.attribute_list.brand,
            description: dataProduct.product_description.subtitle,
            imgUrl: dataProduct.view_list,
            name: dataProduct.name,
            price: dataProduct.pricing_information.standard_price,
            sku
        }
    }

    const renderProduct = () => {
        return !_.isEmpty(activeProduct)
            ? <Product product={activeProduct} />
            : null
    };

    return (
        <MyContext.Provider value={{
            history
        }}>
            <div>
                {renderProduct()}
            </div>
        </MyContext.Provider>
    );
}

export default ProductPage;