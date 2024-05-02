import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCy1AgZRzOf1GeYj2tC6eC7d72VEUQ78K0",
  authDomain: "sampark-1-6e825.firebaseapp.com",
  projectId: "sampark-1-6e825",
  storageBucket: "sampark-1-6e825.appspot.com",
  messagingSenderId: "931544063510",
  appId: "1:931544063510:web:78dc4d23515f28fd739f37",
  // measurementId: "G-X95W0JMZHC"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDboRT_KSvtuYC3XTYeSDQRaKxzl2Pc6cM",
//   authDomain: "social-media-app-15068.firebaseapp.com",
//   projectId: "social-media-app-15068",
//   storageBucket: "social-media-app-15068.appspot.com",
//   messagingSenderId: "626735156359",
//   appId: "1:626735156359:web:ab8dab97878abc18a33c22",
// };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
