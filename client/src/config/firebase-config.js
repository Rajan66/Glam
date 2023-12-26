import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBydRZHS4SxNu-RWri8cPR1IRZ5JBPWiXg",
    authDomain: "glamhour-d3430.firebaseapp.com",
    projectId: "glamhour-d3430",
    storageBucket: "glamhour-d3430.appspot.com",
    messagingSenderId: "724599859850",
    appId: "1:724599859850:web:15978b464a3c867b329b73",
    measurementId: "G-J6WH1GVXVJ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
