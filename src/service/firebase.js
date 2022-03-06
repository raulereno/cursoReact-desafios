// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOjjQjW4mWBumaOSQlQDX80CCgL3LOKA4",
  authDomain: "coder-react-ecommerce.firebaseapp.com",
  projectId: "coder-react-ecommerce",
  storageBucket: "coder-react-ecommerce.appspot.com",
  messagingSenderId: "444043541822",
  appId: "1:444043541822:web:40f19649e5e461ebecc06f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db