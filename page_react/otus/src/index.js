import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import Promo from './components/promo';
import Login from './components/login';
import Header from "./components/header";
import Footer from "./components/footer";
import Profile from './components/profile'
import Performance from './components/performance'
import Courses from './components/courses/page.js'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducer from './reducers'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
    return (
        <Router>
            <Header/>
            <Route path="/" exact component={Promo} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/courses" component={Courses} />
            <Route path="/performance" component={Performance} />
            <Footer/>
        </Router>
    )
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
