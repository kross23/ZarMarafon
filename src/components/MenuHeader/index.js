import {useState} from 'react';
import Menu from '../Menu/index';
import NavBar from '../NavBar/index';
const MenuHeader = ({bgActive}) => {
    const [navState, setNavState] = useState(false);
    const navHeandle = () => {
        setNavState(prev => !prev);
    }
    return(
        <>
        <Menu navState={navState} navHeandle={navHeandle} />
        <NavBar navState={navState} navHeandle={navHeandle}  bgActive={bgActive} />
        </>
    )
}
export default MenuHeader;