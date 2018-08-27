import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAHKblcsUlo3ttdZy3xEkYoqwsMIrlBEn4",
  authDomain: "andresokoldev.firebaseapp.com",
  databaseURL: "https://andresokoldev.firebaseio.com",
  projectId: "andresokoldev",
  storageBucket: "andresokoldev.appspot.com",
  messagingSenderId: "1086552047105",
};

firebase.initializeApp(config);

const DB = firebase.firestore();

const getData = () =>
  DB.collection("national_boards")
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    });

export default getData;
