import { ADD_TO_CART,ADD_TO_CART_WITH_OPTION, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, FETCH_API } from '../Action/action-types'

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
                items: action.products
            }

        case ADD_TO_CART:
            const product = state.items.find(item => item.id === action.id);
            const existedItem = state.addItems.find(item => action.id === item.id);
            if (existedItem) {
                product.quantity += 1;
                return {
                    ...state,
                    total: state.total + product.price
                }
            }
            else {
                product.quantity = 1;
                const newTotal = state.total + product.price;
                return {
                    ...state,
                    addItems: [...state.addItems, product],
                    total: newTotal
                }
            }
            
        case ADD_TO_CART_WITH_OPTION:
            const productOp = state.items.find(item => item.id === action.id);
            const existed_Item = state.addItems.find(item => action.id === item.id);
            if (existed_Item) {
                productOp.quantity += action.valueQuantity;
                return {
                    ...state,
                    total: productOp.price*productOp.quantity
                }
            }
            else {
                productOp.chooseSize=action.size;
                productOp.quantity = action.valueQuantity;
                const newTotal = productOp.price*productOp.quantity;
                return {
                    ...state,
                    addItems: [...state.addItems, productOp],
                    total: newTotal
                }
            }
            
        default:
            return state
    }
}

export default CartReducer;