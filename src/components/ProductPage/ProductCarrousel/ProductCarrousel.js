import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React from 'react';

const ProductCarrousel = ({ onFoward, onBack, index, image }) => {
    return (
        <div className='Product_Carrousel col-md-6 col-lg-8'>
            <button className='Product_Button_Left' onClick={onFoward}>{`<`}</button>
            <button className='Product_Button_Right' onClick={onBack}>{`>`}</button>
            <TransitionGroup className='d-flex justify-content-center'>
                <CSSTransition
                    timeout={1000}
                    classNames='slide'
                    key={index}
                >
                    <img src={image.image_url} alt='Product' />
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default ProductCarrousel;