import _ from 'lodash';
import React, { useContext,useRef } from 'react';
import { MyContext } from '../ProductPage';

const ProductDescription = ({ product }) => {
    const size = useRef();
    const quantity = useRef();

    const context = useContext(MyContext);

    const renderOption = ({ sku, size }) => (
        <option
            key={sku}
            value={sku}
        >
            {size}
        </option>
    );

    const renderCounter = () => {
        const nums = _.range(1, 15);

        return (
            <select ref={quantity}>
                {nums.map(num => (
                    <option
                        key={num}
                        value={num}
                    >
                        {num}
                    </option>
                ))}
            </select>
        )
    }

    const addToBag = () => {
        console.log('Size', size.current.value)
        console.log('Quantity', quantity.current.value)

        context.history.push('/bag');
    }

    return (
        <div className='Product_Description'>
            <div className='Product_Description_Subtitle'>
                {product.brand}
            </div>
            <div className='Product_Description_Title'>
                {product.name}
            </div>
            <div className='Product_Description_Price'>
                ${product.price}
            </div>
            <div className='Product_Description_Content'>
                {product.description}
            </div>
            <select ref={size}>
                <option
                    value='none'
                >
                    SELECT SIZE
                </option>
                {product.sku.map(renderOption)}
            </select>
            {renderCounter()}
            <div>
                <button onClick={addToBag}>
                    ADD TO BAG
                </button>
            </div>
        </div>
    )
}

export default ProductDescription;