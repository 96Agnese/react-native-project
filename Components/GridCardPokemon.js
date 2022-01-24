import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "./CardPokemon";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

const GridCardPokemon = () => {
  const [dataPokemon, setDataPokemon] = useState([]);

  useEffect(() => {
    async function pokemon() {
      const responce = await axios.get(pokemonUrl);
      setDataPokemon(responce.data.results);
    }
    pokemon();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.alignCard}>
          {dataPokemon &&
            dataPokemon.map((item) => (
              <CardPokemon name={item.name} url={item.url} key={item.name} />
            ))}
        </View>
      </ScrollView>
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
