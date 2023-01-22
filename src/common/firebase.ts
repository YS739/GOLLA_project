// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FB_KEY } from './fbKey';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FB_KEY,
  authDomain: 'golla-8cfff.firebaseapp.com',
  projectId: 'golla-8cfff',
  storageBucket: 'golla-8cfff.appspot.com',
  messagingSenderId: '710946382293',
  appId: '1:710946382293:web:de8f4830d266cb38151d5c',
  measurementId: 'G-9VQ13G9QME',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const authService = getAuth(app);
export const db = getFirestore(app);
