var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

let CardView = React.createClass({
  getInitialState: function() {
    return {
      front: true
    };
  },

  flip: function() {
    this.setState({
      front: !this.state.front
    });
  },

  render: function() {
    let text;
    if (this.state.front) {
      text = this.props.card.question;
    } else {
      text = this.props.card.answer;
    }
    return (
      <div>
        <p>{text}</p>

        <button onClick={this.flip} className = "button button-success expand">
          Flip
        </button>
      </div>
    );
  }
});

let ListView = React.createClass({
  render: function() {
    let list = this.props
      .cards
      .map(card => <li>
        {card.question}
      </li>);
    return (
      <ul>
        {list}
      </ul>
    );
  }
});

let App = React.createClass({
  getInitialState: function() {
    return {
      activeIndex: 0
    }
  },
  render: function() {
    let activeCard = this.props.cards[this.state.activeIndex];
    return (
      <div>
        <CardView card={activeCard}/>
        <hr/>
        <ListView cards={this.props.cards}/>
      </div>
    );
  }
});

let cards = [
  {
    question: "What is the ultimate answer to life, the universe, and everything?",
    answer: "42"
  }, {
    question: "When was Harvard founded?",
    answer: "1636"
}, {
    question: "What is the capital of Massachusetts?",
    answer: "Boston"
}
];
ReactDOM.render(<App cards={cards}/>, document.getElementById('app'));