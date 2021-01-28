import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

import './scss/app.scss';
import App from './App';

store.subscribe(() => console.log('counter', store.getState()))

console.log(store.getState())

store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/incremented' })


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    </Router>,
    document.getElementById('root')
);

