import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7ymJmHjNA1iCo7AUcgt1MLYUnObZb3rw",
  authDomain: "cart-ff62f.firebaseapp.com",
  projectId: "cart-ff62f",
  storageBucket: "cart-ff62f.appspot.com",
  messagingSenderId: "839195865398",
  appId: "1:839195865398:web:e76a364d1334883f604397"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


