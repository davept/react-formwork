import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './configureStore'
import App from './components/app';
import Menu from './components/menu'
import Form1 from './components/forms/form1'
import reducers from './reducers';

//import { createStore, applyMiddleware } from 'redux';
//import { Router, Route } from 'react-router'
//import { BrowserRouter } from 'react-router-dom'


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
//todo I don't think I'm actually hooking up the routing.  Split all this and the store shit out!

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRedirect to="/menu"/>
                <Route path="/menu" component={Menu} />
                <Route path="/form1" component={Form1} />
                <Route path="/form2" component={Form1} />
                <Route path="/form3" component={Form1} />
                <Route path="/form4" component={Form1} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
