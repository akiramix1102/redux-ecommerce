import {
    FETCH_API
} from '../Action/action-types';

const initState = {
    items: [],
}

const DashboardReducer = (state = initState, action) => {
   
    switch (action.type) {

        case FETCH_API:
            return {
                ...state,
                items: action.products,
            }
            
            


        default:
            return state
    }
}
export default DashboardReducer;