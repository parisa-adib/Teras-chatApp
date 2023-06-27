import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyALNDPif2EQx8iw6uRpn4FmL8x_3YIuqOc",
  authDomain: "parigram-590b4.firebaseapp.com",
  projectId: "parigram-590b4",
  storageBucket: "parigram-590b4.appspot.com",
  messagingSenderId: "158163148005",
  appId: "1:158163148005:web:c3fba58c7d1a1f67c1c80c"
  }).auth();