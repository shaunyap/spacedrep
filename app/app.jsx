var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var actions = require('./actions/actions.jsx');
var store = require('./store/configureStore.jsx').configure();
import firebase from 'app/firebase/';

import router from 'app/router/';

// Load foundation
$(document).foundation();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/cards');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);