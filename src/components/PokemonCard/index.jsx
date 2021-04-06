
import names_cn from 'classnames';
import P from './index.module.css';
const PokemonCard = ({type,name,id,img,values, active, changeCard, minimize, className,isSelected,possession,finishClick,actives,key }) => {
    
   
    const heandlerCard = (e) => {
          
        let iD = e.currentTarget.id;
        changeCard && changeCard(key);
        finishClick && finishClick(iD);
    }
//isSelected
    return(   
<div className={names_cn(className, P.pokemonCard,{[P.active]:active,[P.selected]:isSelected,[P.actives]:actives})}
        onClick={heandlerCard } id={id}>
        <div className={`${P.cardFront}`} >
            <div className={names_cn(`${P.wrap}`,`${P.front}`)}> 
                <div className={names_cn(P.pokemon,P[type],P[possession] )}  > 
                    <div className={`${P.values}`}>
                      
                        <div className={names_cn(`${P.count }`,`${P.top}`)}> {values.top} </div>
                        <div className={names_cn(`${P.count }`,`${P.right}`)}>{values.right}</div>
                        <div className={names_cn(`${P.count }`,`${P.bottom}`)}>{values.bottom}</div>
                        <div className={names_cn(`${P.count }`,`${P.left}`)}>{values.left}</div>
                        
                    </div>
                        <div className={P.imgContainer}>
                        <img src={img} alt={name} />
                    </div>
                    
                   { !minimize && (<div className={P.info}>
                    <span className={P.number}>#{id}</span>
                    <h3 className={P.name}>
                        {name}
                    </h3>
                    <small className={P.type}>
                        Type: <span>{type}</span>
                    </small>
                </div>) 
                }
                    {/* <div className={P.info}>
                        <span className={P.number}>#{id}</span>
                        <h3 className={P.name}>{name}</h3>
                        <small className={P.type}>Type: <span>{type}</span></small>
                    </div> */}
                </div>
            </div>
        </div>

        <div className={P.cardBack}>
            <div className={names_cn(`${P.wrap}`,`${P.back}`)}>
               
            </div>
        </div>

    </div>

    )
}
export default PokemonCard;