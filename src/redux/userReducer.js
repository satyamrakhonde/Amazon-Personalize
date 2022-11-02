import * as actionTypes from "./action-types";

export const INITIAL_STATE = {
    user: null,
    lastView: 'homepage',
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            const userData = action.payload;
            return {
                ...state,
                user: userData,
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
};

export default userReducer;