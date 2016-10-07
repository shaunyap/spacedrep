import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyB9CBqwNRVS3W6jMPdAmDnLmdDPDQPzpQo",
    authDomain: "spaced-repetition-system.firebaseapp.com",
    databaseURL: "https://spaced-repetition-system.firebaseio.com",
    storageBucket: "spaced-repetition-system.appspot.com",
    messagingSenderId: "438562721221"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var provider = new firebase.auth.FacebookAuthProvider();
export var firebaseRef = firebase.database().ref();
export var database = firebase.database();
export default firebase;