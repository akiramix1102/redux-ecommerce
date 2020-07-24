import {
    ADD_TO_CART,
    ADD_TO_CART_WITH_OPTION,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    SORT_PRICE_ASC,
    SORT_PRICE_DES,
    SORT_NAME_ASC,
    SORT_NAME_DES,
    FETCH_API,
    CLEAR_CART,
    ADD_TO_WISH_LIST,
    FILTER_SIZE,
    FILTER_PRICE,
    ADD_COUPON
} from '../Action/action-types';

const initState = {
    items: [],
    addItems: [],
    wishList: [],
    total: 0,
    filterSize: '',
    filterPrice: [0, 200],
    discount: 0
}

const CartReducer = (state = initState, action) => {
    switch (action.type) {

        case FETCH_API:
            return {
                ...state,
                items: action.products,
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
                } else {
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
                            total: productOp.price * productOp.quantity
                        }
                    } else {
                        productOp.chooseSize = action.size;
                        productOp.quantity = action.valueQuantity;
                        const newTotal = productOp.price * productOp.quantity;
                        return {
                            ...state,
                            addItems: [...state.addItems, productOp],
                            total: newTotal
                        }
                    }

                    case SUB_QUANTITY:
                        const subQuantityItem = state.items.find(item => item.id === action.id);
                        if (subQuantityItem.quantity === 1) {
                            const new_items = state.addItems.filter(item => item.id !== action.id)
                            let newTotal = state.total - subQuantityItem.price;
                            return {
                                ...state,
                                addItems: new_items,
                                total: newTotal
                            }
                        } else {
                            subQuantityItem.quantity -= 1;
                            let newTotal = state.total - subQuantityItem.price;
                            return {
                                ...state,
                                total: newTotal
                            }
                        }

                        case ADD_QUANTITY:
                            const addQuantityItem = state.items.find(item => item.id === action.id);
                            addQuantityItem.quantity += 1;
                            let newTotal = state.total + addQuantityItem.price;
                            return {
                                ...state,
                                total: newTotal
                            }

                            case REMOVE_ITEM:
                                const productRemaining = state.addItems.filter(item => item.id !== action.id);
                                const productWishList = state.wishList.filter(item => item.id !== action.id);
                                const productDeletedPrice = action.price * action.quantity;
                                if (action.string === "Cart") {
                                    return {
                                        ...state,
                                        addItems: productRemaining,
                                        total: state.total - productDeletedPrice
                                    }
                                } else {
                                    return {
                                        ...state,
                                        wishList: productWishList
                                    }
                                }



                                case CLEAR_CART:
                                    const newAddItems = [];
                                    return {
                                        ...state,
                                        addItems: newAddItems
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
                                                let sortNameAsc = state.items.sort((a, b) => a.title.localeCompare(b.title))
                                                return {
                                                    ...state,
                                                    items: sortNameAsc
                                                }

                                                case SORT_NAME_DES:

                                                    let sortNameDes = state.items.sort((a, b) => b.title.localeCompare(a.title))
                                                    return {
                                                        ...state,
                                                        items: sortNameDes
                                                    }

                                                    // add to wish list
                                                    case ADD_TO_WISH_LIST:
                                                        let productItem = state.items.find(item => item.id === action.id);
                                                        const existItem = state.wishList.find(item => action.id === item.id);
                                                        if (!existItem) {
                                                            return {
                                                                ...state,
                                                                wishList: [...state.wishList, productItem]
                                                            }
                                                        } else {
                                                            productItem.wishList = true;
                                                            return {
                                                                ...state
                                                            }
                                                        }

                                                        case FILTER_SIZE:
                                                            return {
                                                                ...state,
                                                                filterSize: action.size
                                                            }

                                                            case FILTER_PRICE:
                                                                return {
                                                                    ...state,
                                                                    filterPrice: action.value
                                                                }

                                                                case ADD_COUPON:
                                                                    const cost = state.total * 10 / 100;
                                                                    if (action.coupon) {
                                                                        return {
                                                                            ...state,
                                                                            total: state.total - cost,
                                                                            discount: cost
                                                                        }
                                                                    }




                                                                    default:
                                                                        return state
    }
}

export default CartReducer;