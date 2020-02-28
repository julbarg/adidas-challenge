const initialState = {

};

function basket (state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                product: action.payload.product
            }
        default:
            return state;
    }
}

export default basket;