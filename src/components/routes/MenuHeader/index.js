import {useState} from 'react';
import Menu from '../../Menu/index';
import NavBar from '../../NavBar/index';
const MenuHeader = ({handleChangePage}) => {
    const [navState, setNavState] = useState(false);
    const navHeandle = () => {
        setNavState(prev => !prev);
    }
    return(
        <>
        <Menu navState={navState} handleChangePage={handleChangePage} />
        <NavBar navState={navState} navHeandle={navHeandle} />
        </>
    )
}
export default MenuHeader;