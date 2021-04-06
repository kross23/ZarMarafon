import navStyle from './style.module.css';
import names_cn from 'classnames';
import { ReactComponent as Login} from "../img/Login.svg";
const NavBar = ({navState , navHeandle, bgActive,onClickLogin}) => {
  
  const heandleNav = () => {
    navHeandle && navHeandle();
} 
  
return(
<nav  className={names_cn(navStyle.root, {
  [navStyle.bgActive]:bgActive
  })}>
  <div className={navStyle.navWrapper}>
    <p className={navStyle.brand}>
      LOGO
    </p>
    <div className={navStyle.loginAndMenu}>
      <div className={navStyle.loginWrap}
      onClick={onClickLogin}
      >
        <Login/>
      </div>
      <div>
<div className={names_cn(navStyle.menuButton,{[navStyle.active]:navState})} onClick={heandleNav}>
      <span />
    </div>
      </div>
    </div>

  </div>
</nav>
    )
}
export default NavBar;
