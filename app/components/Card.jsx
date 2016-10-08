import React from 'react';
var {connect} = require('react-redux');
import * as Redux from 'react-redux';

import CardContent from './CardContent';
import CardControlArea from './CardControlArea';
import firebase from 'app/firebase/';

let cards = [{
    "word": "시작",
    "definition": "Start"
  }];
  
var db = firebase.database();
var ref = db.ref("book");

let cardCount = cards.length;  

export var Card = React.createClass({
  getInitialState: function() {
    return { front: true, cardN: 0, cardArr: cards };
  },
  
  componentDidMount: function() {
    ref.once("value").then((snapshot) => {
      snapshot.forEach( function(data) {
          var newEntry = {};
          newEntry.word = data.val().word;
          newEntry.definition = data.val().definition;
          
          cards.push(newEntry);
          cardCount = cards.length;
      }), (e) => {
        console.log("error reading data");
      };
    
      console.log(cards);
    });
  },

  // upon getting an update from cardControl, if end of deck, go back to first card
  toggleAnswer: function(newState) {
    this.setState({ front: newState });
  },
  
  nextCard: function(newCard) {
    this.setState({ front: true, cardN: newCard%cardCount, cardArr: cards });
  },
    
  render: function() {
    return (
    <div className="card">
        <CardContent front = {this.state.front} cards = {this.state.cardArr} cardN = {this.state.cardN}/>
        <CardControlArea front={this.state.front}
          cardN = {this.state.cardN}
          callbackToggle={this.toggleAnswer}
          callbackNextCard={this.nextCard}
        />
    </div>
  )}
});

export default connect()(Card);