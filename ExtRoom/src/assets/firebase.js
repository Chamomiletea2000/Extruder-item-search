// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc  } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRsEC39MOy3jM4ncjBKhOKy3F6LYcVWM8",
  authDomain: "extroom-backend-epc.firebaseapp.com",
  projectId: "extroom-backend-epc",
  storageBucket: "extroom-backend-epc.appspot.com",
  messagingSenderId: "1052123756341",
  appId: "1:1052123756341:web:f54ae5eb2f3891aef17e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// try {
//     const docRef = await addDoc(collection(db, "test"), {
//       machine: "BSA4",
//       date: "9/6/2024",
//       quantity: 4,
//       active: true
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }

// try {
//   const docRef = await addDoc(collection(db, "test"), {
//     machine: "BSA3",
//     date: "9/6/2024",
//     quantity: 3,
//     active: false
//   });

//   console.log("Document written with ID: ", docRef.id);
//   } 
//   catch (e) {
//     console.error("Error adding document: ", e);
// }

export default db;