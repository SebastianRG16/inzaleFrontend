import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA5Mnsn8JFtHa_ypbI1fV06rd6pDPSXYdk",
  authDomain: "nestjs-auth-aac72.firebaseapp.com",
  projectId: "nestjs-auth-aac72",
  storageBucket: "nestjs-auth-aac72.firebasestorage.app",
  messagingSenderId: "194500091899",
  appId: "1:194500091899:web:178bddd7bdb91f4fe4b55e",
  measurementId: "G-19X57GK0FN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
