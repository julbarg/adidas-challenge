import React, { useEffect } from 'react';
// import axios from '../../config/axiosAdidas';
import axios from 'axios';

const BagPage = () => {

    useEffect(() => {
        const data = [{
            "productId": "CCC",
            "quantity": 1
        }]

        fetch('https://www.adidas.com/api/checkout/baskets/da146b680d58e68c363a6c6381/items', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                body: JSON.stringify(data)
              }).then(response => response.json())
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