import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Card from '../components/Card.jsx';
import Login from '../components/Login.jsx';
import Main from '../components/Main.jsx';
import firebase from 'app/firebase/'

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/cards');
    }
    next();
};

export default(
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
            <Route path="cards" component={Card} onEnter={requireLogin}/>
            <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
        </Route>
    </Router>
);