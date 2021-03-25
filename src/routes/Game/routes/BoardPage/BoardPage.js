import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard/index'
import {PokemonContext} from '../../../../context/pokemonContext';
import PlayerBoard from './components/PlayelBoard/index';
import s from './style.module.css';
const counterWinv = (board, player1, player2) => {
let player1Count = player1.length;
let player2Count = player2.length;
board.forEach(element => {
    if (element.card.possession === 'red'){
        player2Count++;
    }
    if (element.card.possession === 'blue'){
        player1Count++;
    }
});
return [player1Count, player2Count];
}
const BoardPage = () => {
   
    const {pokemon,pokemonTo, getWin}  = useContext(PokemonContext);
    const [board, setboard] = useState([]);
    const [player2, setplaer2] = useState([]);
    const [toglpayer, settoglpayer] = useState(0);
    
    const [player1, setplaer1] = useState(()=>{
        return Object.values(pokemon).map((item)=>({
            ...item,
            possession:'blue'
        }))
    })
    const [chouseCard, setchouseCard] = useState(null);//
    const [stepS, setstepS] = useState(null)
    
   
    const history = useHistory();



useEffect( async () => {
    const url = 'https://reactmarathon-api.netlify.app/api/board';
    const url2 = 'https://reactmarathon-api.netlify.app/api/create-player';

   const boardResponse = await fetch(url);
   const boardRecvest = await boardResponse.json();
   setboard( boardRecvest.data);

   const plaer2response = await fetch(url2);
   const plaer2Recvest = await plaer2response.json();

   setplaer2(()=>{
    return plaer2Recvest.data.map((item)=>(
        {
        ...item,
        possession:'red',
    }));
});
plaer2Recvest.data.map(item => (
    pokemonTo(item)

));
     


}, [])

const HandleClikBoard = async (position) => {
 if (chouseCard.player !== toglpayer){  /// по этому условию игроки могут ходить только по очереди
    settoglpayer(chouseCard.player)
 }else{
return;
 }
  
  
if(chouseCard ){
    const params = {
        position,
        card:chouseCard,
        board
    };
    
    
    const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
    
    const request = await res.json();
    
    
    if(chouseCard.player === 1){
        setplaer1(prev => prev.filter(item => item.id !== chouseCard.id))
    }
    if(chouseCard.player === 2){
        setplaer2(prev => prev.filter(item => item.id !== chouseCard.id))
    }
    setboard(request.data);
    setstepS(prev => {
        const count = prev + 1;
        return count;
    })

    }
}

useEffect(() => {
    if(stepS === 9){
    const  [count1, count2] = counterWinv(board, player1, player2);
        if (count1 > count2){
            getWin('player1 win');
           
        }else if (count1 < count2){
            getWin('player2 win');
        }else{
            getWin('draw');
        }
      

        console.log('fgfg',player2);
        //pokemonTo(player2);
        history.replace('/game/finish');
    }

},[stepS]);





    if (Object.keys(pokemon).length === 0 ){
        history.replace('/game');
    }


    return (
        <div className={s.root}>
	<div className={s.playerOne} >
        <PlayerBoard player={1}
         cards={player1}  onClickCard={(card)=> setchouseCard(card)}/>
                            </div>
            <div className={s.board}>
                {
                 board.map((item) => (
                         <div className={s.boardPlate}
                       key ={item.position } 
                        onClick={() => !item.card && HandleClikBoard(item.position)}
                                                    >
                {
                item.card && <PokemonCard {...item.card} active minimize/>
                }
                </div>))
                }
            </div>
            <div className={s.playerTwo}>
           <PlayerBoard player={2} cards={player2}  onClickCard ={(card)=> setchouseCard(card)}/>
            </div>
        </div>
    );
};

export default BoardPage;