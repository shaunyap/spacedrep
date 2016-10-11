import React from 'react';
var {connect} = require('react-redux');
import * as Redux from 'react-redux';

import CardContent from './CardContent';
import CardControlArea from './CardControlArea';
import firebase from 'app/firebase/';

let cards = [{
    "front": "시작",
    "back": "Start"
  }];

let cardCount = cards.length;  

export var Card = React.createClass({
  getInitialState: function() {
    return { frontSide: true, cardN: 0, cardArr: cards, book: this.props.book };
  },
  
  componentDidMount: function() {
    var db = firebase.database();
    var ref = db.ref(this.props.params.bookName);
    ref.once("value").then((snapshot) => {
      snapshot.forEach( function(data) {
          var newEntry = {};
          newEntry.front = data.val().front;
          newEntry.back = data.val().back;
          
          cards.push(newEntry);
          cardCount = cards.length;
      }), (e) => {
        console.log("error reading data");
      };
    });
  },
  
    componentWillUnmount: function() {
      cards = [{
        "front": "시작",
        "back": "Start"
     }];
     
     cardCount = cards.length
    },


  // upon getting an update from cardControl, if end of deck, go back to first card
  toggleAnswer: function(newState) {
    this.setState({ frontSide: newState });
  },
  
  nextCard: function(newCard) {
    this.setState({ frontSide: true, cardN: newCard%cardCount, cardArr: cards });
  },
    
  render: function() {
    return (
    <div className="card">
        <CardContent frontSide = {this.state.frontSide} cards = {this.state.cardArr} cardN = {this.state.cardN}/>
        <CardControlArea frontSide={this.state.frontSide}
          cardN = {this.state.cardN}
          callbackToggle={this.toggleAnswer}
          callbackNextCard={this.nextCard}
        />
    </div>
  )}
});

export default connect()(Card);