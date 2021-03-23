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
class Firebase {
 
  constructor(){
   //firebase.initializeApp(firebaseConfig);
    this.fire = firebase;
    this.dataBase = this.fire.database();
  }
  getPokemoSocket = (cb) => {
    this.dataBase.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    })
  }
  getPocemonOnse = async () =>{
    return await this.dataBase.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }
  postPokemon = (key, pokemon) => {
    this.dataBase.ref(`pokemons/${key}`).set(pokemon);
  }
  addPokemon = (pokemon, kollback) => {
    const newKey = this.dataBase.ref().child('pokemons').push().key;
   this.fire.database().ref('pokemons/'+ newKey).set(pokemon).then(()=> kollback());

}
ofPokemonSoket = () => {
this.dataBase.ref('pokemons').off();
}
}



export default Firebase;
