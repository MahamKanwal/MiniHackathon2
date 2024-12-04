
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
}
  from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

  import {
    getFirestore,collection, addDoc, deleteDoc, doc, updateDoc
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-UZNo7ZIxNXE4eZfE9QM7odSdWrpzr4Y",
  authDomain: "minihackathon-40c2f.firebaseapp.com",
  projectId: "minihackathon-40c2f",
  storageBucket: "minihackathon-40c2f.firebasestorage.app",
  messagingSenderId: "11731748989",
  appId: "1:11731748989:web:6186bca00593b0840c8914",
  measurementId: "G-FF3RJCNZDY"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  getFirestore,getAuth, createUserWithEmailAndPassword,db
 , signInWithEmailAndPassword, collection, addDoc, deleteDoc, doc, updateDoc,
};
