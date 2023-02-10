import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDwnp96WhNNtpgMmKrBrrdmJgjvSaB8Dis",
    authDomain: "finacetracker-a6980.firebaseapp.com",
    projectId: "finacetracker-a6980",
    storageBucket: "finacetracker-a6980.appspot.com",
    messagingSenderId: "643879980844",
    appId: "1:643879980844:web:4a7ff628b44efe7e02e689",
    measurementId: "G-KHBXHM4045"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };