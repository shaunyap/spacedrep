var React = require('react');
var Nav = require('./Nav.jsx');
var Main = (props) => {
    return (
        <div>
        <header>
            <Nav />
        </header>
        <div className="row">
            <div className="small-12 medium-6 medium-centered column">
                {props.children}
            </div>
        </div>
      </div>
    );
}

module.exports = Main;