// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkYafWImB3ZIaauadGGMiFcYNpuR13Kd0",
  authDomain: "ecommerce-mern-2f55b.firebaseapp.com",
  projectId: "ecommerce-mern-2f55b",
  storageBucket: "ecommerce-mern-2f55b.appspot.com",
  messagingSenderId: "653797895778",
  appId: "1:653797895778:web:c85d1afc6c855cf1ae2b3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
