import { ADD_TO_CART,ADD_TO_CART_WITH_OPTION,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,CLEAR_CART,FETCH_API} from './action-types';


//add cart action 
export const addToCart =id=>{
    return{
        type:ADD_TO_CART,
        id
    }
}

//with option
export const addToCartWithOption =(id,size,qty)=>{
    return{
        type:ADD_TO_CART_WITH_OPTION,
        id,
        size,
        qty
    }
}

//remove item
export const removeItem =id=>{
    return{
        type:REMOVE_ITEM,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

//subtract qt action
export const subQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

//Clear shopping cart
export const clearCart=()=>{
    return{
        type: SUB_QUANTITY,
        
    }
}

//fetch api
export const fetchApi=products=>{
    return{
        type:FETCH_API,
        products
    }
}
