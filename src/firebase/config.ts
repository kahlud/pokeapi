// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-0gD6V4MZf8Xah-TaOJSHT8791Skn3lk',
  authDomain: 'pokeapp-151ae.firebaseapp.com',
  projectId: 'pokeapp-151ae',
  storageBucket: 'pokeapp-151ae.appspot.com',
  messagingSenderId: '61063979955',
  appId: '1:61063979955:web:a2a4f3cacb33caa351a1c6',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
