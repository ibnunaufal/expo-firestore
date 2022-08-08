// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYGeDgdhQa60qoOEcBYzEYM4OVdF03t4A",
  authDomain: "expo-firebase-6aeda.firebaseapp.com",
  projectId: "expo-firebase-6aeda",
  storageBucket: "expo-firebase-6aeda.appspot.com",
  messagingSenderId: "980985734204",
  appId: "1:980985734204:web:595aa7841ebd11a9db0f39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// let app;
// if(firebase.apps.length === 0){
//     app = initializeApp(firebaseConfig);
// }else{
//     app = firebase.app()
// }


// const auth = firebase.auth()

export { app };