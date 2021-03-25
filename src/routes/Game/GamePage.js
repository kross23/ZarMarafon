import { useRouteMatch, Route, Switch } from "react-router-dom";
import React, {useState} from 'react';
import {PokemonContext} from '../../context/pokemonContext';
import StartPage from './routes/StartPage/StartPage';
import BoardPage from './routes/BoardPage/BoardPage';
import FinishPage from './routes/FinishPage/FinishPage';




//PokemonContext.Provider
const GamePage = () => {
const match = useRouteMatch();
const [pokemonSelected, setpokemonSelected] = useState({});
const [player2, setplayer2] = useState({});
const [win, setwin] = useState('');
const handlSelect = (key,selektPO) => { 
    setpokemonSelected(prev =>{
        if (prev[key]){
            const kopyState = {...prev};
            delete kopyState[key];
            return kopyState;
        }
        return {
            ...prev,
            [key]:selektPO,
        }
    })
}
const pokemonTo = (  kard) => {
    setplayer2(prev => {
        return {
            ...prev,
            [kard.id]:kard,
        }
    } )
};
const getWin = (win) => {
setwin(win);
}
const resets=()=>{
    
}
    return (
    <PokemonContext.Provider value = {
        {
        pokemon:pokemonSelected,
        handlSelect:handlSelect,
        pokemon2:player2,
        pokemonTo:pokemonTo,
        win:win,
        getWin:getWin,
          reset:resets,  
        }
    }>
            <Switch>
           {/* // <Route path={`${match.path}/`} exact component={StartPage } addSelected={addSelected}/> */}
        <Route path={`${match.path}/`} exact  component={StartPage}/>
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
           </PokemonContext.Provider>


       
    );
};
export default GamePage;