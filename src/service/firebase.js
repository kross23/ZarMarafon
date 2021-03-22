import firebase from 'firebase/app';
import 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyC7JDefKos2hdwfci9gL72rq_50tTlym9Y",
    authDomain: "zarpokemons.firebaseapp.com",
    databaseURL: "https://zarpokemons-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "zarpokemons",
    storageBucket: "zarpokemons.appspot.com",
    messagingSenderId: "970623328864",
    appId: "1:970623328864:web:95beeae3f00c4251591905"
  };
firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const dataBase = fire.database();

export default dataBase;
