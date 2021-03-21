setsData(prevState => {
    return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (String(pokemon.id) === id) {
          // setPokemons(prevState => prevState.map(item => item.id === id ? { ...item, active: !item.active } : item))
          pokemon.active = !pokemon.active;
          console.log('key',item[0]);
          fire.database().ref('pokemons/'+ item[0]).set({
            ...pokemon
           }, (error) => {
             if (error) {
               console.log('err=', error);
             } else {
              // Data saved successfully!
              console.log('загружено');
            }
          });
        };
        acc[item[0]] = pokemon;
        return acc;
    }, {});
})
};