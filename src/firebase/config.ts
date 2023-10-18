// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCI4NjD5ZuvDLyAyZWd6WkxCbirDdhiqJw",
  authDomain: "docs-clone-20e72.firebaseapp.com",
  projectId: "docs-clone-20e72",
  storageBucket: "docs-clone-20e72.appspot.com",
  messagingSenderId: "660465706397",
  appId: "1:660465706397:web:2e95836e65afcbac96fb74",
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default app;
