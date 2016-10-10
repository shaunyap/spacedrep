import React from 'react';

export var CardControlArea = React.createClass({
     getInitialState: function() {
        return { frontSide: this.props.frontSide };
      },
      
      // define a click handler that flips the card
      flip: function() {
        //   set the side of the card after the change
        var newState = !this.state.frontSide;
        this.setState({
          frontSide: newState
        });

        // pass any changes back up to parent
        this.props.callbackToggle(newState);
      },
      
      nextCard: function() {
      // if the answer is showing, switch to the next card
        var cardN = this.props.cardN + 1;
        this.state.frontSide = true;
        this.props.callbackNextCard(cardN);
      },
      
    
    render: function() {
    var text;
    this.state.frontSide? text = "Show answer" : text = "Show Question"
    return (
        <div>
            <button onClick={this.flip} className="button expanded">
            {text}
            </button>
            
            <button onClick={this.nextCard} className="button expanded">
            Next Card
            </button>
        </div>
        )}
    });


module.exports = CardControlArea;
