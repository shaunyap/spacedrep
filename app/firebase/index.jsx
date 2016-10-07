import firebase from 'firebase';
var config = require("json!../../firebaseConfig.json");

try {
  var config = {
    apiKey: config.API_KEY,
    authDomain: config.AUTH_DOMAIN,
    databaseURL: config.DATABASE_URL,
    storageBucket: config.STORAGE_BUCKET,
    messagingSenderId: config.MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var provider = new firebase.auth.FacebookAuthProvider();
export var firebaseRef = firebase.database().ref();
export var database = firebase.database();
export default firebase;