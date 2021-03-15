import {useState} from 'react';
import P from './index.module.css';
const PokemonCard = ({cardBackSide, type,name, id,img, top, right, bottom, left }) => {
    const [rotate, setrotate] = useState('');

    const heandlerCard = () => {
        if(rotate === 'active'){
            setrotate('');
        }else{
            setrotate('active');
        }
      }


    return(
        <div className={P.root}>
      <div className={`${P.pokemonCard}${rotate}`} onClick={heandlerCard}>
        <div className={P.cardFront}>
            <div className={P.wrap ,P.front}>
                <div className={P.pokemon }> 
                    <div className="P.values">
                        <div className={`${P.count }${P.top}`}>{top}</div>
                        <div className={`${P.count} ${P.right}`}>{right}</div>
                        <div className={`${P.count} ${P.bottom}`}>{bottom}</div>
                        <div className={`${P.count} ${P.left}`}>{left}</div>
                    </div>
                    <div className={P.imgContainer}>
                        <img src={img} alt={name} />
                    </div>
                    <div className={P.info}>
                        <span className={P.number}>#{id}</span>
                        <h3 className={P.name}>{name}</h3>
                        <small className={P.type}>Type: <span>{type}</span></small>
                    </div>
                </div>
            </div>
        </div>

        <div className={P.cardBack}>
            <div className={`${P.wrap} ${P.back}`}>
                <img src={cardBackSide} alt="Сard Backed" />
            </div>
        </div>

    </div>
</div>
    )
}
export default PokemonCard;