import navStyle from './style.module.css';
import names_cn from 'classnames';
const NavBar = ({navState , navHeandle}) => {
  const heandleNav = () => {
    console.log('heandleMenu');
    navHeandle && navHeandle();
} 
  
    return(
<nav className={navStyle.root}>
  <div className={navStyle.navWrapper}>
    <p className={navStyle.brand}>
      LOGO
    </p>
    <a className={names_cn(navStyle.menuButton,{[navStyle.active]:navState})} onClick={heandleNav}>
      <span />
    </a>
  </div>
</nav>
    )
}
export default NavBar;
