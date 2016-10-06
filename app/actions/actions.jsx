import firebase, {firebaseRef, provider} from 'app/firebase/';

export var login= (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var startLogin= () => {
  return(dispatch, getState) => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      console.log('Auth worked, hello ' + result.user.displayName + ', ' + firebase.auth().currentUser.email, result);
    }, (error) => {
      console.log('Unable to Auth', error);
    })
  }
};

export var logout= () => {
  return {
    type: 'LOGOUT'
  };
};

export var startLogout= () => {
  return(dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      console.log('Logged out.');
    });
  }
};