import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCBjzPKomgVt42YRREddmXBS3AM3teWu8k",
  authDomain: "wily-c1c7b.firebaseapp.com",
  projectId: "wily-c1c7b",
  storageBucket: "wily-c1c7b.appspot.com",
  messagingSenderId: "222399227545",
  appId: "1:222399227545:web:bf178c382f83d023c77a08"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
