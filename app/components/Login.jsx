import React from 'react';
import * as Redux from 'react-redux';
import * as actions from '../actions/actions.jsx';

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  render() {
    return (
        <div className='callout callout-auth'>
          <h3>Login</h3>
          <p>Login with your Facebook account.</p>
          <button className='button' onClick={this.onLogin}>Login with Facebook</button>
        </div>
    );
  }
});

export default Redux.connect()(Login);