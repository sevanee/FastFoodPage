import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyCvQHa26dEUp9wwgnwKOX4XmvCQa9cmFiE",
    authDomain: "fastfoodproject-7f9d4.firebaseapp.com",
    databaseURL: "https://fastfoodproject-7f9d4-default-rtdb.firebaseio.com",
    projectId: "fastfoodproject-7f9d4",
    storageBucket: "fastfoodproject-7f9d4.appspot.com",
    messagingSenderId: "311136492570",
    appId: "1:311136492570:web:65040c81f75efbb02d45a3",
    measurementId: "G-EFVL9QSZ2M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}