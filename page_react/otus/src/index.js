import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import Promo from './views/promo';
import Login from './views/login';
import Header from "./views/header";
import Footer from "./views/footer";
import Profile from './views/profile'
import Performance from './views/performance'
import Courses from './views/courses/'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducer from './reducers'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
    return (
        <Router ref={r => window.router = r}>
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
