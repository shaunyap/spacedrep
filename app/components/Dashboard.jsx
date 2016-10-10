import React from 'react';
var {connect} = require('react-redux');
import firebase from '../firebase/index.jsx';
var {Link} = require('react-router');

export var Dashboard = React.createClass({
  getInitialState: function() {
    var bookName = "TOPIK_beginner";
    var user = firebase.auth().currentUser;
    return { user: user, bookName: bookName };
  },
  
  render: function() {
    return (
      <div className="row">
        <div className="small-12 column">
          <h3> Hey {this.state.user.displayName} </h3>
          <p>Which set of cards do you want to load?</p>
          <Link to ="/cards">{this.state.bookName}</Link>
        </div>
      </div>
  )}
});

export default connect()(Dashboard);