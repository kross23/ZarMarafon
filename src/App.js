import bg2 from './img/bg2.jpg';
import cardBackSide from './img/cardBackSide.jpg';
import bg3 from './img/bg3.jpg';
import   logo  from './img/logo.svg';

import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import PokemonCard from './components/PokemonCard';
import data from './components/data.json';
import './App.css';
//urlBg
const color = `#e2e2e2`;

function App() {
 const datacard = data;


  const title = "заголовок";
  const descr = "описание";
  return (

  <div className="App">
    <Header title={title} descr={descr} />
    <Layout title={"первый шаблон"}  bg={bg2}>
    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.

To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
 </Layout>
 
  <Layout title={"второй шаблон"} descr={descr} color={color}>
  <div className="flex">
  {  datacard.map((list, index) => (
    <PokemonCard cardBackSide={cardBackSide}
    type={list.type}
    img={list.img}
    name={list.name}
    base_experience={list.base_experience}
    height={list.height}
    id={list.id} 
    top={list.values.top}
    right={list.values.right}
    bottom={list.values.bottom}
    left={list.values.left}
    
    key={index}
    />
    ))
  }
  </div>
  </Layout>
 
 
  
  <Layout title={"третий шаблон"}  bg={bg3} >
    <img src={logo} alt="logo"/>
  </Layout>
  <Footer/>
  </div>

  );
}

export default App;
