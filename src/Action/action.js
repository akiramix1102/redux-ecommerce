import {
    ADD_TO_CART,
    ADD_TO_CART_WITH_OPTION,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    CLEAR_CART,
    SORT_NAME_ASC,
    SORT_PRICE_ASC,
    SORT_NAME_DES,
    SORT_PRICE_DES,
    FETCH_API,
    ADD_TO_WISH_LIST
} from './action-types';


//add cart action 
export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        id
    }
}

//with option
export const addToCartWithOption = (id, size, qty) => {
    return {
        type: ADD_TO_CART_WITH_OPTION,
        id,
        size,
        qty
    }
}

//remove item
export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

//subtract qt action
export const subQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}

//Clear shopping cart
export const clearCart = () => {
    return {
        type: CLEAR_CART,

    }
}

//SORT
export const sortPriceAsc = (value, item) => {
    return {
        type: SORT_PRICE_ASC,
        value,
        item

    }
}
export const sortPriceDes = (value, item) => {
    return {
        type: SORT_PRICE_DES,
        value,
        item

    }
}
export const sortNameAsc = (value, item) => {
    return {
        type: SORT_NAME_ASC,
        value,
        item

    }
}
export const sortNameDes = (value, item) => {
    return {
        type: SORT_NAME_DES,
        value,
        item

    }
}

export const addToWishList = (id) => {
    return{
        type: ADD_TO_WISH_LIST,
        id
    }
}

//fetch api
export const fetchApi = products => {
    return {
        type: FETCH_API,
        products
    }
}