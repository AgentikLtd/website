import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBD7HZeqk1qOn1SMh245DjpfxHauRgbYxg",
  authDomain: "agentikwebsite.firebaseapp.com",
  projectId: "agentikwebsite",
  storageBucket: "agentikwebsite.appspot.com",
  messagingSenderId: "182590090726",
  appId: "1:182590090726:web:a0a5245956f7f4659bba27"
};

// Initialize Firebase only if it hasn't been initialized yet
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase services
export const auth = getAuth(app);
auth.useDeviceLanguage();

// Initialize Firestore with persistence
export const db = getFirestore(app);
enableIndexedDbPersistence(db).catch((err) => {
  console.warn('Firebase persistence error:', err);
});