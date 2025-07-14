// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBIUss_2CkLKkUSTpIxC6tB37IJQW-p2Mk",
  authDomain: "learningguide-academy.firebaseapp.com",
  databaseURL: "https://learningguide-academy-default-rtdb.firebaseio.com",
  projectId: "learningguide-academy",
  storageBucket: "learningguide-academy.appspot.com",
  messagingSenderId: "872205411007",
  appId: "1:872205411007:web:2018275ee936bbe7065c0a"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
export default app;
