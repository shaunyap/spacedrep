import React from 'react';
var {connect} = require('react-redux');
import firebase from '../firebase/index.jsx';
var {Link} = require('react-router');

export var Dashboard = React.createClass({
  getInitialState: function() {
    var bookName = [];
    var user = firebase.auth().currentUser;
    return { user: user, bookName: bookName };
  },

  componentDidMount: function() {
    var db = firebase.database();
    var ref = db.ref();
    var tempBook = [];
    ref.once("value").then((snapshot) => {
      snapshot.forEach( function(data) {
        tempBook.push(data.key);
      }), (e) => {
        console.log("error reading data");
      };
    }).then(() => {
      this.setState({bookName: tempBook});
    });
  },
  
  render: function() {
    return (
      <div className="row dashboard">
        <div className="small-12 column">
          <h3> Hey {this.state.user.displayName} </h3>
          <p>Which set of cards do you want to load?</p>
          <ul>
          {this.state.bookName.map(function(book) {
            return <li key={book}><Link to={'/cards/'+book}>{book}</Link></li>
          })}
          </ul>
        </div>
      </div>
  )}
});

export default connect()(Dashboard);