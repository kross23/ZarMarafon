import React,{useState,useEffect} from 'react';
import cN from 'classnames';
import PokemonCard from '../../../../../../components/PokemonCard/index';

import s from './payer.module.css';
const PlayerBoard = ({cards,onClickCard, player}) => {
const [isSelected, setisSelected] = useState(null);
const [sPlayer, setPlayer] = useState(null);
     
            return(

                <>
                {//
                cards.map((item) => (
                    <div className={ cN(s.cardboard,{[s.selected]: isSelected === item.id })} onClick ={()=> {
                     

                        setisSelected(item.id);
                       
                        onClickCard&&onClickCard({
                            player,
                            ...item,
                        });
                        }} >
                    <PokemonCard
                    isSelected ={item.selected}
                    //className={s.card}         
                    type={item.type}
                    img={item.img}
                    name={item.name}
                    base_experience={item.base_experience}
                    height={item.height}
                    id={item.id} 
                    values={item.values}
                    minimize
        
                    active={true}
                    key={item.id}
                    
                    />
                        
                    </div>

                )) 
            }
</>
    )
}
export default PlayerBoard;