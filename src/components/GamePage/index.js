import {useState} from 'react';
import {Link} from 'react-router-dom';
import PokemonCard from '../PokemonCard/index';
import cardBackSide from '../img/cardBackSide.jpg';//cardBackSide.jpg
import game from './style.module.css';
import data from '../json/data.json';
const GamePage = () => {
  const datacard = data;
const [sData, setsData] = useState(datacard);
console.log('sData: ', sData);
    
const changeCard = (e) => {
  const result = sData.filter(item => {
    if(item.id === Number(e)){
      console.log('item.id: ', item.id);
      item["active"] = true;
    }
    return true;
  } );
  setsData(result);
}


    return(
        <>
        <div>GamePage</div>
        <button >
        <Link to='home'>
        Home
                  </Link>
        </button>
        <div className={game.flex}>
  {  sData.map(list => (
    <PokemonCard cardBackSide={cardBackSide}
    type={list.type}
    img={list.img}
    name={list.name}
    base_experience={list.base_experience}
    height={list.height}
    id={list.id} 
    top={list.values.top}
    right={list.values.right}
    bottom={list.values.bottom}
    left={list.values.left}
    changeCard={changeCard}
    active={list.active}
    key={list.id}
    />
    ))
  }
  </div>
        </>
        
    )
}
export default GamePage;