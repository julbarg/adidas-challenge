import React, { useEffect } from 'react';
import axios from '../../config/axiosAdidas';


const BagPage = () => {

    useEffect(() => {
        const data = [{
            "productId": "CCC",
            "quantity": 1
        }]

        axios.post('checkout/baskets/')
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            Hola
        </div>
    )
}

export default BagPage;