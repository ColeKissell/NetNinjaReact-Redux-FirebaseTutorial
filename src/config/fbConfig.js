import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCAcz0fcDl7XL6rsL7tj1ictBsnf9eVfko",
    authDomain: "example-netninja-marioplan.firebaseapp.com",
    databaseURL: "https://example-netninja-marioplan.firebaseio.com",
    projectId: "example-netninja-marioplan",
    storageBucket: "example-netninja-marioplan.appspot.com",
    messagingSenderId: "631320014827"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 