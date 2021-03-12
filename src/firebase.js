import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCA1noWgfYmBSsT4_X0yYsVOogDZzz8C8o",
    authDomain: "robinhood-a60cb.firebaseapp.com",
    projectId: "robinhood-a60cb",
    storageBucket: "robinhood-a60cb.appspot.com",
    messagingSenderId: "861136416030",
    appId: "1:861136416030:web:61e88d3eb361b9fb50ed0f"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };