import { PokemonContext } from "../../../../context/pokemonContext";
import React, { useContext, useState, useEffect } from "react";
import PokemonCard from "../../../../components/PokemonCard/index";
import {useHistory} from 'react-router-dom';
import Firebase from "../../../../service/firebase";

import s from "./style.module.css";

const FinishPage = () => {
  const firebaseFinish = new Firebase();
  const { pokemon, pokemon2, win, reset } = useContext(PokemonContext);
  const [player1, setplayer1] = useState({});
  const [palyer2, setpalyer2] = useState({});
  const [sWin, setsWin] = useState("");

const history = useHistory();
  const finishClick = (id) => {
    setpalyer2((prevState) =>
      Object.entries(prevState).map((item) =>
        String(item[1].id) === String(id)
          ? { ...item[1], selected: !item[1].selected }
          : { ...item[1], selected: false }
      )
    );
  };

  const hadleAddCard = () => {
    const car = Object.entries(palyer2).filter((item) => {
      if (item[1].selected === true) {
        return true;
      }
    });
    firebaseFinish.addPokemon(car[0][1], console.log);
  history.replace('/');
  };

  useEffect(() => {
    Object.entries(pokemon).forEach((item) => {
      setplayer1((prev) => {
        return {
          ...prev,
          [item[0]]: item[1],
        };
      });
    });
    Object.entries(pokemon2).forEach((item) => {
      setpalyer2((prev) => {
        return {
          ...prev,
          [item[0]]: item[1],
        };
      });
    });
    setsWin(win);
    reset();
  }, []);

  return (
    <div>
      <span>карточки игрока номер 1</span>
      <div className={s.flex}>
        {Object.entries(player1).map(
          ([
            key,
            {
              name,
              img,
              id,
              type,
              values,
              selected,
              base_experience,
              height,
              actives,
            },
          ]) => (
            <PokemonCard
              isSelected={selected}
              className={s.card}
              type={type}
              img={img}
              name={name}
              base_experience={base_experience}
              height={height}
              id={id}
              values={values}
              active={true}
              key={key}
            />
          )
        )}
      </div>
      <div>
     
        <span>победил игрок {sWin} </span>
        <span>карточки игрока номер 2 </span>
        <span>выберите одну карточку </span>
      </div>

      <button className={s.button} onClick={hadleAddCard}  >
        добавить карточку
      </button>

      <div className={s.flex}>
        {
          //win === 'player1 win'?

          Object.entries(palyer2).map(
            ([
              key,
              {
                name,
                img,
                id,
                type,
                values,
                selected,
                base_experience,
                height,
                actives,
              },
            ]) => (
              <PokemonCard
                isSelected={selected}
                className={s.card}
                //className={s.actives}
                selected={selected}
                type={type}
                img={img}
                name={name}
                base_experience={base_experience}
                height={height}
                id={id}
                values={values}
                active={true}
                key={key}
                finish={true}
                actives={actives}
                finishClick={finishClick}
              />
            )
          )
        }
      </div>
    </div>
  );
};
export default FinishPage;
