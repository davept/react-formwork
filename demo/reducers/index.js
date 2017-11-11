import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import records from './records'

const rootReducer = combineReducers({
    routing: routerReducer,
    records
});

export default rootReducer;
