import React from 'react';

import CardContent from './CardContent';
import CardControlArea from './CardControlArea';

let cards = [
    {"word":"사실","definition":"The truth, a fact"},
    {"word":"나다","definition":"To be born"},
    {"word":"없다","definition":"Do not exist, absent"}, 
    {"word":"경우","definition":"A case or an instance"},
    {"word":"싶다","definition":"want,hope"}
  ];
  
let cardCount = cards.length;  

export var Card = React.createClass({
  getInitialState: function() {
    return { front: true, cardN: 0, cardArr: cards };
  },

  // upon getting an update from cardControl, if end of deck, go back to first card
  onChildChanged: function(newState, newCard) {
    this.setState({ front: newState, cardN: newCard%cardCount });
  },
    
  render: function() {
    return (
    <div className="card">
        <CardContent front = {this.state.front} cards = {this.state.cardArr} cardN = {this.state.cardN}/>
        <CardControlArea front={this.state.front} cardN = {this.state.cardN} callbackParent={this.onChildChanged}/>
    </div>
  )}
});

module.exports = Card;