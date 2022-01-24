import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "./CardPokemon";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

const GridCardPokemon = () => {
  const [dataPokemon, setDataPokemon] = useState([]);

  useEffect(() => {
    async function pokemon() {
      const response = await axios.get(pokemonUrl);
      setDataPokemon(response.data.results);
    }
    pokemon();
  }, []);
  //result api name
  return (
    <SafeAreaView>
      <FlatList
        //il mio array con i dati
        data={dataPokemon}
        //props degli stili al posto di View
        contentContainerStyle={styles.alignCard}
        //renderitem è la map
        renderItem={({ item }) => <CardPokemon name={item.name} url={item.url} key={item.name} />}
        keyExtractor={({ item }) => item?.name}
      />
      {/* <View style={styles.alignCard}>
          {dataPokemon &&
            dataPokemon.map((item) => (
              
            ))}
        </View> */}
      {/* </FlatList> */}
    </SafeAreaView>
  );
};

export default GridCardPokemon;

const styles = StyleSheet.create({
  alignCard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
