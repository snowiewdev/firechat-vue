import firebase from "firebase/app";
import "firebase/database";

const config = {
  // API Keys
  apiKey: "AIzaSyAMUK89xRAMwh3_6T0CCqJloj1ypW_PE_4",
  authDomain: "firechat-vue-8322c.firebaseapp.com",
  projectId: "firechat-vue-8322c",
  storageBucket: "firechat-vue-8322c.appspot.com",
  messagingSenderId: "254249717158",
  appId: "1:254249717158:web:5159f81c97c35e8cfa5367",
};

const db = firebase.initializeApp(config);
export default db;
