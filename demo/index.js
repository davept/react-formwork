import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import configureStore from './configureStore'
import App from './components/App';
import menu from './components/menu'
import form1 from './components/forms/form1'

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Route path="/" component={menu} />
                <Route path="/form1" component={form1} />
                <Route path="/form2" component={form1} />
                <Route path="/form3" component={form1} />
                <Route path="/form4" component={form1} />
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);
