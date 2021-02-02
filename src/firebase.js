import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCw8glXC7xaDZby6hsN0QK2Z8egfa5GP40",
    authDomain: "robinhood-9e20f.firebaseapp.com",
    projectId: "robinhood-9e20f",
    storageBucket: "robinhood-9e20f.appspot.com",
    messagingSenderId: "343533946338",
    appId: "1:343533946338:web:723fbb500820173d9a65bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };