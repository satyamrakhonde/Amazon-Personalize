import * as actionTypes from "./action-types";

export const INITIAL_STATE = {
    cart: [],
    totQty: 0,

}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            const item = action.payload;
            if ( state.cart.length !== 0)
             {return {
                ...state,
                cart: [...state.cart, {...item}],
                totQty: state.totQty + 1,
            }} else {
                return {
                    ...state,
                    cart: [{...item}],
                    totQty: 1,
                }
            }

        case actionTypes.ADD_TO_CART_BULK:
            const {items,qty} = action.payload;
            let tempCart = [];
            for (let i = 0; i < qty; i++) {
                tempCart.push(items);
            }
            return {
                ...state,
                cart:[...state.cart, ...tempCart],
                totQty: state.totQty + qty,
            }
            
        case actionTypes.USER_LOGOUT:
            return {
                cart: [],
                totQty: 0
            };
        case actionTypes.USER_LOGIN: 
            return {
                cart: [],
                totQty:0
            }
        default:
            return state;
    }
};

export default cartReducer;