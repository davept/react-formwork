import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import configureStore from './configureStore'
import App from './components/App';
import menu from './components/menu'
import form1 from './components/forms/form1'
import editArtist from './components/forms/editArtist'
import editLabel from './components/forms/editLabel'
import editRecording from './components/forms/editRecording'
import editAnything from './components/forms/editAnything'

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Route path="/" component={menu} />
                <Route path="/form1" component={form1} />
                <Route path="/editArtist" component={editArtist} />
                <Route path="/editLabel" component={editLabel} />
                <Route path="/editRecording" component={editRecording} />
                <Route path="/editAnything" component={editAnything} />
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);
