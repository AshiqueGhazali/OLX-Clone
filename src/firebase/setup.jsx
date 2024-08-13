import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore"; // Import Firestore



const firebaseConfig = {
  apiKey: "AIzaSyACH6yEMPug3Ox3gnt3AwlaxPpcFXbBSSw",
  authDomain: "olx-clone-658fb.firebaseapp.com",
  projectId: "olx-clone-658fb",
  storageBucket: "olx-clone-658fb.appspot.com",
  messagingSenderId: "832382353742",
  appId: "1:832382353742:web:d985092006364c02579e1f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider
const storage = getStorage(app); // Initialize Firebase Storage
const firestore = getFirestore(app); // Initialize Firestore


export {
    auth,
    googleProvider,
    storage,
    firestore // Export Firestore
}