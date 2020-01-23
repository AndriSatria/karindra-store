import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyARtl5OiDS3T3MeVHjS4jugjKtIqMo5Jfo',
	authDomain: 'karindra-db.firebaseapp.com',
	databaseURL: 'https://karindra-db.firebaseio.com',
	projectId: 'karindra-db',
	storageBucket: 'karindra-db.appspot.com',
	messagingSenderId: '193771678753',
	appId: '1:193771678753:web:4b14c763736a162f788760',
	measurementId: 'G-881MY0MCRH'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;