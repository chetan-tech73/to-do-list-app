import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import getAuth for the auth object
import { getFirestore } from 'firebase/firestore'



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later

const firebaseConfig = {
    apiKey: 'AIzaSyASY-DfJaIUI8KE_k4RDj656hUfoVUaZ48',
    authDomain: 'to-do-list-app-33fdf.firebaseapp.com',
    projectId: 'to-do-list-app-33fdf',
    storageBucket: 'to-do-list-app-33fdf.appspot.com',
    messagingSenderId: '475989850548',
  appId: '1:475989850548:web:f348f58dabdf2bee075ae1',
  measurementId: 'G-XCZ8Q7VF3R'

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Use getAuth to get the auth object
const db = getFirestore(app);
export { db };


export default auth;