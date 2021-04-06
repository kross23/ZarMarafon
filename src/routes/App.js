
import { Redirect, Route, Switch,useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import GamePage from './Game/GamePage';
import HomePage from '../components/Home';
import MenuHeader from '../components/MenuHeader';

import cn from 'classnames';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import NotFound from '../components/NotFound';
import app from './app.module.css';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import PrivataRoute from '../components/PrivateRoute';



const App = () => {
  const location = useLocation();
let loc;
  if(location.pathname === "/" || location.pathname === "/home"||
  location.pathname === '/game/board'|| location.pathname === '/'){
    loc = true;
  }else{
    loc = false;
  }




 return(
  <>
   <Switch>
     
      <Route path='/404' component={NotFound}>
      </Route>
     <Route>
       <>
        <MenuHeader bgActive={!loc}/>
      <div className={cn(app.wrap,{
        [app.isHomePage]:loc
      })}>
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/home" exact component={HomePage}/>
              <PrivataRoute path="/game" component={GamePage}/>
              <PrivataRoute path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
             <Route  render={ ()=>(
               <Redirect to="/404"/>
             )}/>
            </Switch>
      </div>
          <Footer/>
      </>
     </Route>
   </Switch>
   <NotificationContainer />
  
   </> 
   )
}
export default App;