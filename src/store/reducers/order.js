import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const fetchOrdersStart = (state, action) => {
    return updateObject(state, {loading: true});
}

const fetchOrdersSucces = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
}

const fetchOrdersFailed = (state, action) => {
    return updateObject(state, {loading: false});
}

const purchaseInit = (state, action) => {
    return updateObject(state, {purchased: false});
}

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: true});
}

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderId,
        orderData: action.orderData 
    }

    return updateObject(state, {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    });
}

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSucces(state, action);
        case actionTypes.FETCH_ORDERS_FAILED:
            return fetchOrdersFailed(state, action);
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START:
            return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCES:
            return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL:
            return purchaseBurgerFail(state, action);
        default:
            return state;
    }
}

export default reducer;