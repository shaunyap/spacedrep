var React = require('react');

var Main = (props) => {
    return (
      <div>
        <div className='row'>
            <div className='column small-12'>
                {props.children}
            </div>
        </div>
      </div>
    );
}

module.exports = Main;