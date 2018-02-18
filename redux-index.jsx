import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import memoryApp from './src/app/reducer';
import App from './src/app/app.jsx';
import {loadStartPage} from "./src/app/actions";
import thunkMiddleware from 'redux-thunk';

let store = createStore(
    memoryApp,
    applyMiddleware(thunkMiddleware)
);

store.dispatch(loadStartPage());

render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);