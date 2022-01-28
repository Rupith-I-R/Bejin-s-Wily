import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCW7EKhj9WL2mRsa2Qg5T1zbq_xQ8ACizU",
  authDomain: "wyly2-eaec2.firebaseapp.com",
  projectId: "wyly2-eaec2",
  storageBucket: "wyly2-eaec2.appspot.com",
  messagingSenderId: "146658072383",
  appId: "1:146658072383:web:2ce33568248a0ee301658a"
};

firebase.initialiseApp(firebaseConfig)
export default firebase.firestore();