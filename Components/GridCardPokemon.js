import { FlatList, StyleSheet, Text, View, Touch } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "./CardPokemon";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

const GridCardPokemon = () => {
  const [dataPokemon, setDataPokemon] = useState([]);

  // funzione quando voglio cancellare qualcosa
  // deleteToDoHandler = (name) => {
  //   console.log(name);
  //   setDataPokemon((data) => {
  //     return data.filter((pokemon) => pokemon.name != name);
  //   });
  // };

  useEffect(() => {
    async function pokemon() {
      const response = await axios.get(pokemonUrl);
      setDataPokemon(response.data.results);
    }
    pokemon();
  }, []);
  //result api name
  return (
    <View>
      <FlatList
        //data dice prendo i tuoi dati dall'array che in questo caso è il mio useState
        data={dataPokemon}
        //renderitem è la map dove il primo elemento 'item' lo passerà ai figli
        renderItem={({ item }) => (
          <CardPokemon
            name={item.name}
            url={item.url}
            key={item.name}
            // onDelete={deleteToDoHandler}
          />
        )}
        //props degli stili al posto di View
        contentContainerStyle={styles.alignCard}
        keyExtractor={({ item }) => item?.name}
      />
    </View>
  );
};

export default GridCardPokemon;

const styles = StyleSheet.create({
  alignCard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 300,
  },
});
