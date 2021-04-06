// const {pokemon}  = useContext(PokemonContext);
const {pokemon} = context.pokemon;

console.log('board',board);
context.handlSelect(board);

setsData(prevState => {
    return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (String(pokemon.id) === id) {
          // setPokemons(prevState => prevState.map(item => item.id === id ? { ...item, active: !item.active } : item))
          pokemon.active = !pokemon.active;
          console.log('key',item[0]);
          fire.database().ref('pokemons/'+ item[0]).set({
            ...pokemon
           }, (error) => {
             if (error) {
               console.log('err=', error);
             } else {
              // Data saved successfully!
              console.log('загружено');
            }
          });
        };
        acc[item[0]] = pokemon;
        return acc;
    }, {});
})



const load_in = async () => {   // просто загрузка данных из базы          
  dataBase.ref('pokemons').once('value', ( snapshot) => {
   if (snapshot.exists()) {
     setsData(snapshot.val());
     console.log('стейт получил данные успешно');
   }
   else {
     console.log("No data available");
   }
 })
 .catch(function(error) {
   console.error(error);
 });

}

// const changeCard = (id) => { // по клику на карту добавляем поле актив и переворачиваем ее и сразу обновляем экземпляр в БД
//   for (const [key, value] of Object.entries(sData)) {
//     const pokemon = {...value};
//     if (String(pokemon.id) === String(id)) {
//       pokemon.active = !pokemon.active;
//       fire.database().ref('pokemons/'+ key).set({
//         ...pokemon
//        },(error) => {
//          if (error) {
//            console.log('err=', error);
//          } else {
//           // Data saved successfully!
//           console.log('загружено');
//         }
//       }).then(() => {
//         setsData(prevState => {
//           return Object.entries(prevState).reduce((acc, item) => {
//               const pokemon = {...item[1]};
//               //console.log('переданый',id);
//               if (String(pokemon.id) === String(id)) {
//                 pokemon.active = !pokemon.active;
//               };
//               acc[item[0]] = pokemon;
//               return acc;
//           }, {});
//       });
//       });
//     };
//   }
// };


// const load_to = () => {  
//  // добавляем в базу новую карту // если у нее поле актив активное
//   for (const [key, value] of Object.entries(sData)) {
//     if(value.active === true ){  
//       delete value.active;          // удаляем у карты поле актив чтобы грузилась репевернутая
//       value.id = `f${(+new Date()).toString(16)}`;  // добавляем уникальный  id
//       const newKey = dataBase.ref().child('pokemons').push().key;
//      fire.database().ref('pokemons/'+ newKey).set({
//      ...value
//     }, (error) => {
//       if (error) {
//         // The write failed...
//         console.log('err=', error);
//       } else {
//         // Data saved successfully!
//         console.log('загружено');
//       }
//     })
//     .then( () => {
//     setsData(prevState => {
//           return {newKey:value};          
//       }, {});
//     })
//     .then(()=>{
//      // load_in();
//     });
//   };
// };
// };