// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA7-uDvQe2hFXjPLIz-GvtyB006_sqW8g",
  authDomain: "module-6-3eb62.firebaseapp.com",
  projectId: "module-6-3eb62",
  storageBucket: "module-6-3eb62.appspot.com",
  messagingSenderId: "854474739385",
  appId: "1:854474739385:web:2eb0eacf8f21cebc62d568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// getinformation from the database
export const auth = getAuth(app);


export const provider = new GoogleAuthProvider();

export default app; 