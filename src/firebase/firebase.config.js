
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBSJRoxZcPW2gDFeU-DQCYd2DTe5lPw1ts",
  authDomain: "assignment-10-prebon-travels.firebaseapp.com",
  projectId: "assignment-10-prebon-travels",
  storageBucket: "assignment-10-prebon-travels.appspot.com",
  messagingSenderId: "655292745132",
  appId: "1:655292745132:web:216d74a7678e31afaa6609",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth 
