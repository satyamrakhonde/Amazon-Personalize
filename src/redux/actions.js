import * as actionTypes from './action-types';

export const login = (user) => {
    return {
        type: actionTypes.USER_LOGIN,
        payload: user,
    }
}

export const logout = (user) => {
    return {
        type: actionTypes.USER_LOGOUT,
        payload: user,
    }
}

export const updateLastView = (pageName) => {
    return {
        type: actionTypes.LAST_VIEW,
        payload: pageName,
    }
}

export const updateLastPage = (pageName) => {
    return {
        type: actionTypes.LAST_PAGE,
        payload: pageName,
    }
}

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item,
    }
}

export const addToCartBulk = (items,qty) => {
    return {
        type: actionTypes.ADD_TO_CART_BULK,
        payload: {items,qty},  
    }
}

export const removeFromCart = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: item,
    }
}

export const viewItem = (item) => {
    return {
        type: actionTypes.VIEW_ITEM,
        payload: item,
    }
}