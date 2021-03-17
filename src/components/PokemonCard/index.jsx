
import names_cn from 'classnames';
import P from './index.module.css';
const PokemonCard = ({cardBackSide, type,name, id,img, top, right, bottom, left, active, changeCard }) => {
    

    const heandlerCard = (e) => {
        const iD = e.currentTarget.id;
        changeCard && changeCard(iD);
    }


    return(
        <div className={P.root}>
      <div className={names_cn(P.pokemonCard,{[P.active]:active})} onClick={heandlerCard} id={id}>
        <div className={`${P.cardFront}`} >
            <div className={names_cn(`${P.wrap}`,`${P.front}`)}> 
                <div className={`${P.pokemon}`}> 
                    <div className={`${P.values}`}>
                        <div className={names_cn(`${P.count }`,`${P.top}`)} > {top} </div>
                        <div className={names_cn(`${P.count }`,`${P.right}`)}>{right}</div>
                        <div className={names_cn(`${P.count }`,`${P.bottom}`)}>{bottom}</div>
                        <div className={names_cn(`${P.count }`,`${P.left}`)}>{left}</div>
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
            <div className={names_cn(`${P.wrap}`,`${P.back}`)}>
                <img src={cardBackSide} alt="Сard Backed" />
            </div>
        </div>

    </div>
</div>
    )
}
export default PokemonCard;