import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnSA52yJ7HOowUYCTcpjV4CY4gt1PaBAQ",
  authDomain: "altaqueuing.firebaseapp.com",
  projectId: "altaqueuing",
  storageBucket: "altaqueuing.appspot.com",
  messagingSenderId: "874379735501",
  appId: "1:874379735501:web:24e9bc87136a4287929484",
  measurementId: "G-V2P367FY89",
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

