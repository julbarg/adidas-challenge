import React, { useEffect, useState } from 'react';
import './Product.css';
import ProductCarrousel from '../ProductCarrousel';
import ProductDescription from '../ProductDescription';

const Product = ({ product }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageActive, setImageActive] = useState(0);

    useEffect(() => {
        setImageActive(product.imgUrl[activeIndex])
    }, [activeIndex, product]);

    const forward = () => {
		if(activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		} else {
			setActiveIndex(product.imgUrl.length - 1);
		}
	}

	const back = () => {
		if (activeIndex < product.imgUrl.length - 1) {
			setActiveIndex(activeIndex + 1);
		} else {
			setActiveIndex(0);
		}
	}

    return (
        <div className='Product'>
            <div className="row">
                <ProductCarrousel
                    onFoward={forward}
                    onBack={back}
                    index={activeIndex}
                    image={imageActive}
                />
                <ProductDescription product={product}/>
            </div>

        </div>
    )
}

export default Product;