import React, {useContext} from 'react';
import PokemonCard from '../../../../components/PokemonCard/index'
import {PokemonContext} from '../../../../context/pokemonContext';
import s from './style.module.css';

const BoardPage = () => {
    const {pokemon}  = useContext(PokemonContext);
    console.log('selectedPokem:== ', pokemon);


    return (
        <div className={s.root}>
	<div className={s.playerOne}>{
                    Object.values(pokemon).map(({name, img ,id ,type ,values ,selected ,base_experience ,height}) => (
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
                            minimize
				
				            active={true}
				            key={id}
                            
                            />
                        ))                                
                                                        
                                                        
                                                        
                                                        }</div>
            <div className={s.board}>
              
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;