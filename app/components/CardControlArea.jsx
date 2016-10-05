import React from 'react';

export var CardControlArea = React.createClass({
     getInitialState: function() {
        return { front: this.props.front };
      },
      
      // define a click handler that flips the card
      flip: function() {
        //   set the side of the card after the change
        var newState = !this.state.front;
        this.setState({
          front: newState
        });

        // if the answer is showing, switch to the next card
        var cardN = this.props.cardN;
        newState? cardN++ : cardN;

        // pass any changes back up to parent
        this.props.callbackParent(newState, cardN);
      },
    
    render: function() {
    var text;
    this.state.front? text = "Show answer" : text = "Next Question"
    return (
        <div>
            <button onClick={this.flip} className="button expanded">
            {text}
            </button>
        </div>
        )}
    });


module.exports = CardControlArea;
