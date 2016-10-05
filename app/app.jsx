var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Main from './components/Main.jsx';
import Card from './components/Card.jsx';

// Load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Card}/>
    </Route>
  </Router>,
  document.getElementById('app')
);