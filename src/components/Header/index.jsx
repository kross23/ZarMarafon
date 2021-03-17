import {Link} from 'react-router-dom'; 
import s from  './index.module.css';

const Header =({descr, title}) => {
 
return(
    <header className={s.root}>
    <div className={s.forest}></div>
    <div className={s.silhouette}></div>
    <div className={s.moon}></div>
    <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button >
        <Link to='game'>
        game
        </Link>
        </button>
    </div>
</header>
)
}
export default Header;