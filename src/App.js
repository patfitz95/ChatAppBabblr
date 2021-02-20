import React from 'react'
import './App.css';
import ChatRoom from './components/ChatRoom'
import ChatMessage from './components/ChatMessage'
import SignIn from './components/SignIn'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDhsZpKUArwumSWJSR7ntj-bvzWLqZThPw",
  authDomain: "babblrchatapp.firebaseapp.com",
  projectId: "babblrchatapp",
  storageBucket: "babblrchatapp.appspot.com",
  messagingSenderId: "448916416925",
  appId: "1:448916416925:web:2f96b3cf61803faa8d6774",
  measurementId: "G-068V5HF54L"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  );
}

export default App;
