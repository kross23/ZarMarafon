import {Link,useHistory} from 'react-router-dom'; 
import s from  './index.module.css';
import but from './button.module.css';

const Header =({descr, title}) => {
    const history = useHistory();
    const hanGStart = () => {
        history.push('/game')
        
        }
return(
    <header className={s.root}>
    <div className={s.forest}></div>
    <div className={s.silhouette}></div>
    <div className={s.moon}></div>
    <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
      
        
        <button  className={but.button} onClick={hanGStart}>
        game
        </button>
        
        
    </div>
</header>
)
}
export default Header;