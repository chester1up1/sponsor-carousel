import * as firebase from "firebase";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyDIEJZvxRUP716aT0mmJxe3D_3FJ7jGdVo",
  authDomain: "sponsor-carousel.firebaseapp.com",
  databaseURL: "https://sponsor-carousel.firebaseio.com",
  projectId: "sponsor-carousel",
  storageBucket: "sponsor-carousel.appspot.com",
  messagingSenderId: "488077348102",
  appId: "1:488077348102:web:cd7bd1527b32b367d16287",
};
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const database = firebase.firestore();
