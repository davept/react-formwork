import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import recordsReducer from './records'

const rootReducer = combineReducers({
    routing: routerReducer,
    recordsReducer
});

export default rootReducer;
