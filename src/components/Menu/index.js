import { Link } from 'react-router-dom';
import menuStyle from './style.module.css';
import names_cn from 'classnames';

const Menu = ({navState, navHeandle}) => {
  const heandleMenu = () => {
    
    navHeandle && navHeandle();
  }
const MENU =[
  {
    title:"HOME",
    to:"/home",
  },
  {
    title:"GAME",
    to:"/game",
  },
  {
    title:"ABOUT",
    to:"/about",
  },
  {
    title:"CONTACT",
    to:"/contact",
  },
]
    return(
        <div className={names_cn(menuStyle.menuContainer,{[menuStyle.active]:
          navState===true,[menuStyle.deactive]:navState===false})
        }>
        <div className={menuStyle.overlay} />
        <div className={menuStyle.menuItems}>
          <ul >
          {
            MENU.map(({title, to}, index) => (
              <li key = {index} onClick={heandleMenu}>
              <Link to={to}>
                {title}
                  </Link>
                  </li>
            ))
          }

          </ul>
        </div>
      </div>

    )
}
export default Menu;