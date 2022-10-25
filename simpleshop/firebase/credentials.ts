import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_ENV_LOCAL_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_ENV_LOCAL_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_ENV_LOCAL_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_ENV_LOCAL_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_ENV_LOCAL_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_ENV_LOCAL_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export const auth = getAuth(firebaseApp);
