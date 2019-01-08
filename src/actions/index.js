const axios = require('axios');

export const ORDERS_LOADING = 'ORDERS_LOADING';
export const ORDERS_LOADING_FAILED = 'ORDERS_LOADING_FAILED';
export const ORDERS_LOADING_SUCCEEDED = 'ORDERS_LOADING_SUCCEEDED';

export function loadSampleData() {
    return dispatch => {
        dispatch(loading());

        axios.get('./orders.json')
            .then(function (response) {
                if (response.data) {
                    dispatch(succeeded(response.data));
                }
            })
            .catch(function (error) {
                dispatch(failed(error));
            });
    }
}

export const loading = () => ({
    type: ORDERS_LOADING,
});

export const succeeded = data => ({
    type: ORDERS_LOADING_SUCCEEDED,
    orders: data.orders
});

export const failed = error => ({
    type: ORDERS_LOADING_FAILED,
    error: error
});
