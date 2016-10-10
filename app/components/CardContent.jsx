import React from 'react';

export var CardContent = React.createClass({
  render() {
    let text;
    let n = this.props.cardN;
    var cards = this.props.cards;
    if (this.props.frontSide) {
      text = cards[n].front;
    } else {
      text = cards[n].back;
    }
    return (
      <h4>{text}</h4>
  )}
});

module.exports = CardContent;
