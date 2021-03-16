import menuStyle from './style.module.css';
import names_cn from 'classnames';

const Menu = ({handleChangePage,navState}) => {
    const heandleMenu = (e) => {
      let target = e.target.textContent.toLowerCase();
      handleChangePage && handleChangePage(target);
    } 

    return(
        <div className={names_cn(menuStyle.menuContainer,{[menuStyle.active]:navState})}>
        <div className={menuStyle.overlay} />
        <div className={menuStyle.menuItems}>
          <ul onClick={heandleMenu} >
            <li>
              <a href="#welcome">
                HOME
              </a>
            </li>
            <li>
              <a href="#game">
                GAME
              </a>
            </li>
            <li>
              <a href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
        
    )
}
export default Menu;