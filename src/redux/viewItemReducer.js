import * as actionTypes from "./action-types";

export const INITIAL_STATE = {
    item: null,
}

const viewItemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.VIEW_ITEM:
            const itemVal = action.payload;
            return {
                ...state,
                item: itemVal, 
            }
        case actionTypes.USER_LOGIN:
            return {
                item: null,
            };
        case actionTypes.USER_LOGOUT:
            return {
                item: null,
            };
       
        default:
            return state;
    }
};

export default viewItemReducer;