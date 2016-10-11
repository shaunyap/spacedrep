var React = require('react');
var {Link} = require('react-router');
import * as Redux from 'react-redux';
import firebase, {firebaseRef, provider} from 'app/firebase/';

export var Nav = React.createClass({
    onLogout() {
        firebase.auth().signOut().then(function() {
          console.log("signout success.")
        }, function(error) {
          console.log(error);
        });
    },
    render: function() {
          return (
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <ul className='menu'>
                        <li className='menu-text'>Learn Korean Flashcards.</li>
                    </ul>
                </div>
               {firebase.auth().currentUser ? <div className='top-bar-right'>
                    <ul className='menu'>
                        <li>
                            <Link onClick={this.onLogout}>Log Out</Link>
                        </li>
                    </ul>
                </div> : null }
            </div>
        )}
    });

module.exports = Nav;