// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfod8Q6PnwZkgOG9-KJz4m6HR3_nReOtk",
  authDomain: "solosphere-template-e51ee.firebaseapp.com",
  projectId: "solosphere-template-e51ee",
  storageBucket: "solosphere-template-e51ee.firebasestorage.app",
  messagingSenderId: "579480869520",
  appId: "1:579480869520:web:04d73923a66f79f240d615",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default auth;
