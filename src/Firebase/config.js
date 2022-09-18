import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa0W9jxa4jsUmuJNGHw5UAEfC-Ca0kXcQ",
  authDomain: "booking-soccer.firebaseapp.com",
  projectId: "booking-soccer",
  storageBucket: "booking-soccer.appspot.com",
  messagingSenderId: "423602121879",
  appId: "1:423602121879:web:e02122def39c0c88e64dd2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const ggProvider = new GoogleAuthProvider();
export { auth, ggProvider };