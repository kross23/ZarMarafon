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
    В игре два игрока сталкиваются друг с другом, одна сторона играет «синими», а другая - «красными» на сетке 3x3. У каждого игрока в руке по пять карт, и цель состоит в том, чтобы захватить карты противника, превратив их в красный или синий цвет игрока. Чтобы выиграть, большинство из десяти сыгранных карт (включая одну карту, которая не находится на доске) должны быть цвета карты игрока. Для этого игрок должен захватить карты, поместив карту рядом с картой оппонента, после чего будут сравниваться «ранги» сторон, на которых соприкасаются две карты. Если ранг карты оппонента выше, чем карта игрока, карта игрока будет захвачена и превращена в цвет оппонента. Если ранг игрока выше, карта противника будет захвачена и заменена на цвет игрока.
 </Layout>
    <Layout title={"статистика побед"} descr={descr} color={color}>
  
      </Layout>
    <Layout title={"самые сильные карты"}  bg={bg3} />
  </>
 
  );
}

export default HomePage;
