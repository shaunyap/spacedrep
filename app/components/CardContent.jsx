import React from 'react';



export var CardContent = React.createClass({
  render() {
    let text;
    let n = this.props.cardN;
    var cards = this.props.cards;
    if (this.props.front) {
      text = cards[n].word;
    } else {
      text = cards[n].definition;
    }
    return (
      <h4>{text}</h4>
  )}
});

module.exports = CardContent;
