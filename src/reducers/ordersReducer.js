import {ORDERS_LOADING, ORDERS_LOADING_FAILED, ORDERS_LOADING_SUCCEEDED} from '../actions/index'

const initialState = {
    orders: [],
    loading: false,
    error: null
};

export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
        case ORDERS_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ORDERS_LOADING_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case ORDERS_LOADING_SUCCEEDED:
            return {
                ...state,
                loading: false,
                orders: action.orders
            };
        default:
            return state;
    }
}
