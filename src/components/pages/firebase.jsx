import firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import  {getFirestore} from "@firebase/firestore";

var firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyBmPKMVsLI6mRc9JtNYYQBka7SHLQDJxFI",
  authDomain: "project-22618.firebaseapp.com",
  projectId: "project-22618",
  storageBucket: "project-22618.appspot.com",
  messagingSenderId: "432590172741",
  appId: "1:432590172741:web:75d109e74f28469d95a92c",
  measurementId: "G-XEFV1R9GJ7"
});
 
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
var db=firebaseApp.firestore();
export {db};