// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUX87oAKK67mJkD9SKvszeXrsAWI5Bqjw",
  authDomain: "ynov-web-cloud.firebaseapp.com",
  databaseURL: "https://ynov-web-cloud-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ynov-web-cloud",
  storageBucket: "ynov-web-cloud.appspot.com",
  messagingSenderId: "253627564287",
  appId: "1:253627564287:web:0a4f93bbbe3e2f59b64cca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;