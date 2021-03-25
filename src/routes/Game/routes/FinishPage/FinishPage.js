import {PokemonContext} from '../../../../context/pokemonContext';
import React,{useContext, useState,useEffect} from "react";
import PokemonCard from '../../../../components/PokemonCard/index';
import  s from  './style.module.css'


const FinishPage = () =>{
  const {pokemon,pokemon2, win, reset }  = useContext(PokemonContext);
  const [player1, setplayer1] = useState({});
  const [palyer2, setpalyer2] = useState({})

useEffect(() => {
  setplayer1(()=>{
    return pokemon.map((item)=>(
        {
        ...item,
    }));
});
setpalyer2(()=>{
    return pokemon2.map((item)=>(
        {
        ...item,
    }));
});
reset();
}, [])



    
  
    return(
        <div >
            <span>карточки игрока номер 1</span>
<div className={s.flex}>
    
{  Object.entries(player1).map( ([key,{name, img ,id ,type ,values ,selected ,base_experience ,height}]) => (
    <PokemonCard
    isSelected ={selected}
      className={s.card}         
				type={type}
				img={img}
				name={name}
				base_experience={base_experience}
				height={height}
				id={id} 
        values={values}
				active={true}
				key={key}
    />
    ))
  }
</div>
<span>карточки игрока номер 2   </span>
      <button className={s.button}> победил игрок {win}</button>
           
<div className={s.flex}>
{win === 'player1 win'?

  Object.entries(palyer2).map( ([key,{name, img ,id ,type ,values ,selected ,base_experience ,height}]) => (
      <PokemonCard
      isSelected ={selected}
        className={s.card}         
          type={type}
          img={img}
          name={name}
          base_experience={base_experience}
          height={height}
          id={id} 
          values={values}
          active={true}
          key={key}
      />
      )):''
    
}





</div>
</div>
    )
}
export default FinishPage;