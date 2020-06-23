import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,FETCH_API} from './action-types';


//add cart action 
export const addToCart =id=>{
    return{
        type:ADD_TO_CART,
        id
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

//fetch api
export const fetchApi=products=>{
    return{
        type:FETCH_API,
        products
    }
}
