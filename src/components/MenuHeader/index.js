import {useState} from 'react';
import LoginForm from '../LoginForm';
import Menu from '../Menu/index';
import Modal from '../Modal';
import { NotificationManager} from 'react-notifications';
import NavBar from '../NavBar/index';
const MenuHeader = ({bgActive}) => {
    const [navState, setNavState] = useState(false);
    const [iSopenModal, setiSopenModal] = useState(false);
    const [registry, setregistry] = useState(false);
    const navHeandle = () => {
        setNavState(prev => !prev);
    }
const handleClickLogin = () => {
    setiSopenModal(prev => !prev);
}
const handleRegisry = (e) => {
e.preventDefault();
    setregistry(prev => prev = !prev);
}

const handleSubmitLoginForm = async ({email,password}) => {
const reqwestOptions = {
    method:'POST',
    body:JSON.stringify({
        email,
        password,
        returnSecureToken:true,

        })
    };  

const urlIn = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7JDefKos2hdwfci9gL72rq_50tTlym9Y';
const urlReg = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7JDefKos2hdwfci9gL72rq_50tTlym9Y';

if(registry){
    const responce = await fetch(urlIn,reqwestOptions).then(res =>  res.json());
    console.log('responce',responce);
        if (responce.hasOwnProperty('error')){
            NotificationManager.error(responce.error.message,'wrong!');
        }else{
            localStorage.setItem('idToken',responce.idToken);
            NotificationManager.success('авторизация успешна');
            setiSopenModal(false);
        }

    
}else{
    const responce = await fetch(urlReg,reqwestOptions).then(res =>  res.json());
    if (responce.hasOwnProperty('error')){
        NotificationManager.error(responce.error.message,'wrong!');
    }else{
        localStorage.setItem('idToken',responce.idToken);
        NotificationManager.success('регистрация успешна');
        setiSopenModal(false);
    }
}
};
    return(
        <>
        <Menu navState={navState} navHeandle={navHeandle} />
        <NavBar navState={navState}
        navHeandle={navHeandle} 
        bgActive={bgActive}
        onClickLogin={handleClickLogin} 
        />
   <Modal title="login in" isOpen={iSopenModal} onClouseModal={handleClickLogin}>
                    <LoginForm onSubmit={handleSubmitLoginForm} registry={registry} handleRegisry={handleRegisry}  />
    </Modal>
        </>
    )
}
export default MenuHeader;