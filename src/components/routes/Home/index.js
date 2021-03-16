import bg2 from '../../img/bg2.jpg';
import cardBackSide from '../../img/cardBackSide.jpg';
import bg3 from '../../img/bg3.jpg';
import   logo  from '../../img/logo.svg';

import Header from '../../Header/index';
import Layout from '../../Layout/index';
import Footer from '../../Footer/index';
import PokemonCard from '../../PokemonCard/index';
import data from '../../json/data.json';
import style from './style.module.css';
import MenuHeader from '../MenuHeader';
//urlBg
const color = `#e2e2e2`;

function HomePage({handleChangePage}) {
 const datacard = data;
const handleClick = (page) => {
  console.log('HomePage');
  handleChangePage && handleChangePage(page);
}

  const title = "заголовок";
  const descr = "описание";
  return (

  <div className={style.App}>
    <MenuHeader handleChangePage={handleChangePage} />
    <Header title={title} descr={descr} handleClick={handleClick}/>
    
    <Layout title={"первый шаблон"}  bg={bg2}>
    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.

To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
 </Layout>
 
  <Layout title={"второй шаблон"} descr={descr} color={color}>
  <div className={style.flex}>
  {  datacard.map(list => (
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
    
    key={list.id}
    />
    ))
  }
  </div>
  </Layout>
  <Layout title={"третий шаблон"}  bg={bg3} >
    <img src={logo} alt="logo" width="189" height="189"/>
  </Layout>
  <Footer/>
  </div>

  );
}

export default HomePage;
