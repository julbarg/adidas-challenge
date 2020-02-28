const initialState = [];

function product (state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return [
                ...state,
                action.payload.products
            ]
        default:
            return state;
    }
}

export default product;