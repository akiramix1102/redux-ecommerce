import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, FETCH_API } from '../Action/action-types'

const initState = {
    items: [],
    addItems: [],
    total: 0
}

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_API:
            return {
                ...state,
                items:action.products
            }
        case ADD_TO_CART:
            const product=state.items.find(item=>item.id===action.id);
            state.addItems.push(product)
            console.log(state.addItems);
            
            default:
                return state
    }
}

export default CartReducer;