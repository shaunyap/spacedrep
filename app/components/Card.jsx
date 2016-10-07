import React from 'react';
var {connect} = require('react-redux');

import CardContent from './CardContent';
import CardControlArea from './CardControlArea';
import firebase from 'app/firebase/';

let cards = [];

  // Database query - need to make this async, and load more than just one card
  var newWord = firebase.database().ref('0/' + '/word');
  var nObj = {};
  newWord.on('value', function(snapshot) {
    nObj.word = snapshot.val();
  });

  var newDef =firebase.database().ref('0/' + '/definition');
  newDef.on('value', function(snapshot) {
    nObj.definition = snapshot.val();
  });
  
  cards.push(nObj);
  
let cardCount = cards.length;  

export var Card = React.createClass({
  getInitialState: function() {
    return { front: true, cardN: 0, cardArr: cards };
  },

  // upon getting an update from cardControl, if end of deck, go back to first card
  toggleAnswer: function(newState) {
    this.setState({ front: newState });
  },
  
  nextCard: function(newCard) {
    this.setState({ front: true, cardN: newCard%cardCount });
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