import * as actionTypes from "./action-types";

export const INITIAL_STATE = {
    lastView: 'homepage',
    lastPage: 'items',
}

const lastViewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LAST_VIEW:
            const viewName = action.payload;
            return {
                ...state,
                lastView: viewName,
            }
        case actionTypes.USER_LOGIN:
            return {lastView: 'homepage', lastPage:'items'};
        case actionTypes.USER_LOGOUT: 
            return {lastView: '', lastPage:''};
        default:
            return state;
    }
};

export default lastViewReducer;