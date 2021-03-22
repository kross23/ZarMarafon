import bg2 from '../img/bg2.jpg'; //'../../img/bg2.jpg'
import bg3 from '../img/bg3.jpg';
import Header from '../Header/index';
import Layout from '../Layout/index';


//urlBg
const color = `#e2e2e2`;

function HomePage({handleChangePage}) {
 
const handleClick = (page) => {
  handleChangePage && handleChangePage(page);
}

  const title = "games poKemons";
  const descr = "очень крутая игра";
  return (
   <>
    <Header title={title} descr={descr} handleClick={handleClick}/>
    <Layout title={"Правила"}  bg={bg2}>
    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
      Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.

        To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
 </Layout>
    <Layout title={"статистика побед"} descr={descr} color={color}>
    
      </Layout>
    <Layout title={"самые сильные карты"}  bg={bg3} />
  </>
 
  );
}

export default HomePage;
