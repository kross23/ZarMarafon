import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PokemonCard from '../PokemonCard/index';
import cardBackSide from '../img/cardBackSide.jpg';//cardBackSide.jpg
import  { dataBase, fire } from '../../service/firebase';
import game from './style.module.css';
//import data from '../json/data.json';


const GamePage = () => {
  const [sData, setsData] = useState({});
const load_in = async () => {   // просто загрузка данных из базы 
            
   dataBase.ref('pokemons').once('value', ( snapshot) => {
    if (snapshot.exists()) {
      setsData(snapshot.val());
      console.log('успешно');



    }
    else {
      console.log("No data available");
    }
  })
  .catch(function(error) {
    console.error(error);
  });

}


const load_to = () => {     // добавляем в базу новую карту // если у нее поле актив активное
  for (const [key, value] of Object.entries(sData)) {
    if(value.hasOwnProperty('active')!== null && value.active === true ){
      console.log('fffff',value);
      delete value.active;          // удаляем у карты поле актив чтобы грузилась репевернутая
      value.id = `f${(+new Date()).toString(16)}`;  // добавляем уникальный  id
      const newKey = dataBase.ref().child('pokemons').push().key;
     fire.database().ref('pokemons/'+ newKey).set({
     ...value
    }, (error) => {
      if (error) {
        // The write failed...
        console.log('err=', error);
      } else {
        // Data saved successfully!
        console.log('загружено');
      }
    });
    }
  }
  load_in();
};

useEffect(() => {
  load_in();
},[])


const changeCard = (id) => { // по клику на карту добавляем поле актив и переворачиваем ее и сразу обновляем экземпляр в БД
console.log('qqqqq',id);
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
};

return(
        <>
        <div>GamePage</div>
       <div className="blok_buttons">
       <Link to='home'>
        Go to Home
        </Link>
        <button className={game.button} onClick={load_to}>
        добавить каточку активную карту
        </button>
       </div>

        
        <div className={game.flex}>
  {  Object.entries(sData).map( ([key,{name, img ,id ,type ,values ,active ,base_experience ,height}]) => (
    <PokemonCard cardBackSide={cardBackSide}
				type={type}
				img={img}
				name={name}
				base_experience={base_experience}
				height={height}
				id={id} 
				top={values.top}
				right={values.right}
				bottom={values.bottom}
				left={values.left}
				changeCard={changeCard}
				active={active ? active :''}
				key={key}
       
    />
    ))
  }
  </div>
        </>
        
    )
}
export default GamePage;