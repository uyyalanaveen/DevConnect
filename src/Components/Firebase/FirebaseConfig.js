// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFZz4EYz9gs4_wMK1rrKKweFQVciP9jkg",
  authDomain: "devconnect-ea9b9.firebaseapp.com",
  projectId: "devconnect-ea9b9",
  storageBucket: "devconnect-ea9b9.appspot.com",
  messagingSenderId: "832941860745",
  appId: "1:832941860745:web:326d0922326e15b829e358",
  measurementId: "G-CGMPB02QLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it for use in other files
const auth = getAuth(app); // Initialize Authentication

export { auth, analytics };

