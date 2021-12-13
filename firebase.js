// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI8eYhiw9TJoxKPcYwhydSBN5tZnhu9OA",
  authDomain: "fir-auth-1a145.firebaseapp.com",
  projectId: "fir-auth-1a145",
  storageBucket: "fir-auth-1a145.appspot.com",
  messagingSenderId: "294458922305",
  appId: "1:294458922305:web:ec65831735b55289967dc0"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };