// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIQPnT3snP850_kwj4-tWX5CVLTgOkF70",
  authDomain: "foodorderingapp-72711.firebaseapp.com",
  projectId: "foodorderingapp-72711",
  storageBucket: "foodorderingapp-72711.appspot.com",
  messagingSenderId: "41547620310",
  appId: "1:41547620310:web:b8807bf5d4ae3d26b40e77",
  measurementId: "G-F6EXD25VK7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
