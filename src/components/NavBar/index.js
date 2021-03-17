import navStyle from './style.module.css';
import names_cn from 'classnames';
const NavBar = ({navState , navHeandle, bgActive}) => {
  
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
    <div className={names_cn(navStyle.menuButton,{[navStyle.active]:navState})} onClick={heandleNav}>
      <span />
    </div>
  </div>
</nav>
    )
}
export default NavBar;
