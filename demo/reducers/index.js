import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
//import usersReducer from './users'

const rootReducer = combineReducers({
    routing: routerReducer//,
    //root: (action, state) => state
});

export default rootReducer;
