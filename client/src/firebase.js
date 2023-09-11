import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from"firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBRP5y9hiLMeCknBBelo_fJ7r-b9MSuWz0",
  authDomain: "video-285fb.firebaseapp.com",
  projectId: "video-285fb",
  storageBucket: "video-285fb.appspot.com",
  messagingSenderId: "894093435263",
  appId: "1:894093435263:web:feefb543f246ced169ba4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app;