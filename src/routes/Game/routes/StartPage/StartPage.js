import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PokemonContext } from "../../../../context/pokemonContext";
import { Link } from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard/index";
import Firebase from "../../../../service/firebase";
import { selectCoun, add } from "../../../../store/counter";
import game from "./style.module.css";
import b from "./button.module.css";

const StartPage = () => {
  const [sData, setsData] = useState({});
  const firebas = new Firebase();
  const history = useHistory();
  const dispatch = useDispatch(); /// пока ничего
  const store = useSelector(selectCoun);

  const load_in = async () => {
    // просто загрузка данных из базы
    const response = await firebas.getPocemonOnse();
    Object.entries(response).map((item) => {
      if (item[1].selected) {
        delete item[1]["selected"];
      }
    });
    setsData(response);
  };
  const context = useContext(PokemonContext);
  const changeCard = (key) => {
    const selektPO = { ...sData[key] };
    context.handlSelect(key, selektPO);
    setsData((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        selected: !prev[key].selected,
      },
    }));
  };

  const handleStart = () => {
    history.push("/game/board");
  };
  useEffect(() => {
    load_in();
    dispatch(add(sData));
    console.log("store: ", store);
    return () => firebas.ofPokemonSoket();
  }, []);

  return (
    <>
      <div>GamePage</div>

      <div className={b.blok_buttons}>
        <Link to="home">Go to Home</Link>
        <button
          className={b.button}
          onClick={handleStart}
          disabled={Object.keys(context.pokemon).length < 5}
        >
          выберите пять карт
        </button>
        {/* <button onClick={ctord}>
          toolkit
        </button> */}
      </div>

      <div className={game.flex}>
        {Object.entries(sData).map(
          ([
            key,
            { name, img, id, type, values, selected, base_experience, height },
          ]) => (
            <PokemonCard
              isSelected={selected}
              className={game.card}
              type={type}
              img={img}
              name={name}
              base_experience={base_experience}
              height={height}
              id={id}
              values={values}
              active={true}
              key={key}
              changeCard={() => {
                if (Object.keys(context.pokemon).length !== 5) {
                  changeCard(key);
                }
              }}
            />
          )
        )}
      </div>
    </>
  );
};

export default StartPage;
