import firebase from 'firebase';

const config = {
  appKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_Database_URL,
  projectId: process.env.REACT_APP_Project_ID,
  storageBucket: process.env.REACT_APP_Storage_Bucket,
  messagingSenderId: process.env.REACT_APP_Messaging_Sender_ID,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.firestore();
