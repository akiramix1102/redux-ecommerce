import {
    SORT_PRICE_ASC,
    SORT_PRICE_DES,
    SORT_NAME_ASC,
    SORT_NAME_DES,
    FETCH_API,
    CLEAR_CART
} from '../Action/action-types';

const initState = {
    items: [],
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {

        case FETCH_API:
            return {
                ...state,
                items: action.products,
            }
            
            

        case SORT_PRICE_ASC:
            let sortPriceAsc = state.items.sort((a, b) => a.price - b.price)
            return {
                ...state,
                items: sortPriceAsc
            }

        case SORT_PRICE_DES:
            let sortPriceDes = state.items.sort((a, b) => b.price - a.price)
            return {
                ...state,
                items: sortPriceDes
            }

        case SORT_NAME_ASC:
            let sortNameAsc=state.items.sort((a,b)=>a.title.localeCompare(b.title))          
            return{
                ...state,
                items:sortNameAsc
            }
        
        case SORT_NAME_DES:

                let sortNameDes=state.items.sort((a,b)=>b.title.localeCompare(a.title))
                return{
                    ...state,
                    items:sortNameDes
                }

        default:
            return state
    }
}
export default ProductReducer;