import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


//Removed API Key

const firebaseConfig = {
  apiKey: " ",
  authDomain: " ",
  projectId: " ",
  storageBucket: " ",
  messagingSenderId: " ",
  appId: "  ",
  measurementId: "  "
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export{auth};
export default firebase;