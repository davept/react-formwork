import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'

import allReducers from './reducers/index'

const configureStore = () => {
    //const persistedState = loadState();
    //const store = createStore(reducer, persistedState);

    const middlewares = [
        routerMiddleware(browserHistory),
        thunk
    ];

    if (process.env.NODE_ENV !== 'dist') {
        middlewares.push(createLogger());
    }

    return createStore(
        allReducers,
        //persistedState // <- optional
        applyMiddleware(...middlewares) // <- this parameter is called an enhancer
    );
};

export default configureStore;
