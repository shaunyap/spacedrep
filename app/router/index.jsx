import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

import Card from '../components/Card.jsx';
import Login from '../components/Login.jsx';
import Main from '../components/Main.jsx';
import Dashboard from '../components/Dashboard.jsx';

import firebase from 'app/firebase/'

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/login/');
    }
    next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

export default(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Dashboard} onEnter={requireLogin}/>
        <Route path="login" component={Login} onEnter={redirectIfLoggedIn}/>
        <Route path="cards" component={Dashboard} onEnter={redirectIfLoggedIn}/>
        <Route path="cards/:bookName" component={Card} onEnter={requireLogin}/>
    </Route>
  </Router>
);