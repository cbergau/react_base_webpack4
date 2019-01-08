import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from './components/App.jsx';

import ordersReducer from "./reducers/ordersReducer";

let reducers = combineReducers({
    orders: ordersReducer
});

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

let enhancers = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(reducers, enhancers);

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
};

registerServiceWorker();

// Render once
render(App);
