import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD04-GWNpy6StFeWYH5vyUTvcZS8_sWPAk",
    authDomain: "project-71-ecd57.firebaseapp.com",
    projectId: "project-71-ecd57",
    storageBucket: "project-71-ecd57.appspot.com",
    messagingSenderId: "951687827874",
    appId: "1:951687827874:web:826bdd18285456bd0322fb"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
