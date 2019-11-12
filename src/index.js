import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reset from './reducers/Reset/';

/*
  Components
*/
import HomeComponent from './Components/Home/index'


import {
    createStore,
    combineReducers,
    applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';


import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

const store = createStore(
    combineReducers({
        form,
        reset
    }), // Don't forget to register the reducers here
    composeWithDevTools(applyMiddleware(thunk))
);



function App() {
    return (
        <Provider store={store}>
            <HomeComponent/>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
