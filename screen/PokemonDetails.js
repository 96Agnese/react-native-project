import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import CustomButton from "../Components/CustomButton";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import TypesButtons from "../Components/TypesButtons";
import BaseStats from "../Components/BaseStats";

const PokemonDetails = ({ route, navigation }) => {
  const { pokemon: pokemonName } = route.params;
  // dati pokemondex fino ad abilities
  const [dataPokemon, setDataPokemon] = useState([]);

  const getPokemonData = useCallback(async () => {
    console.log(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const responce = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    setDataPokemon(responce.data);
  }, [pokemonName]);

  useEffect(() => {
    getPokemonData();
  }, []);

  // pokemon deriva da cardpokemon che è la mia chiave che poi passo qui
  return (
    // TEXT AND IMAGE POKEMON
    <View style={{ paddingHorizontal: 20 }}>
      <View style={{ width: 90, margin: 8 }}>
        <CustomButton onPress={() => navigation.navigate("AllPokemon")} text="Go back" />
      </View>
      <Text style={styles.textPokedexDetail}> {pokemonName}</Text>
      <View style={{ alignItems: "center" }}>
        {dataPokemon && (
          <Image
            source={{ uri: dataPokemon.sprites?.other["official-artwork"].front_default }}
            style={{
              height: 150,
              width: 150,
              backgroundColor: "black",
              marginVertical: 10,
              borderRadius: 20,
            }}
          />
        )}
      </View>
      {/* DETAILS POKEMON */}
      <View style={styles.containerDataPokemon}>
        <View style={{ ...styles.column }}>
          <Text style={styles.titlesDesciption}>Pokédex Data</Text>
          {/* mi da lo spazio tra i 2  */}
          <View style={{ ...styles.pokedexDataDetail }}>
            {/* style grey */}
            <Text style={styles.infoDetail}>Pokedex Num</Text>
            {/* style bold dx */}
            <Text style={styles.dxDetail}>{dataPokemon.id}</Text>
          </View>
          <View style={{ ...styles.pokedexDataDetail }}>
            {/* style grey */}
            <Text style={styles.infoDetail}>Types</Text>
            {/* style bold dx */}
            <Text style={styles.dxDetail}>
              {dataPokemon.types &&
                dataPokemon.types.map((element) => {
                  return <TypesButtons name={element.type.name} color={element.type.name} />;
                })}
            </Text>
          </View>
          <View style={{ ...styles.pokedexDataDetail }}>
            {/* style grey */}
            <Text style={styles.infoDetail}>Height</Text>
            {/* style bold dx */}
            <Text style={styles.dxDetail}>{dataPokemon.height} m</Text>
          </View>
          <View style={{ ...styles.pokedexDataDetail }}>
            {/* style grey */}
            <Text style={styles.infoDetail}>Weight</Text>
            {/* style bold dx */}
            <Text style={styles.dxDetail}>{dataPokemon.weight} m</Text>
          </View>
          <View style={{ ...styles.pokedexDataDetail }}>
            {/* style grey */}
            <Text style={styles.infoDetail}>Abilities</Text>
            {/* style bold dx */}
            <Text style={styles.dxDetail}>
              {dataPokemon.abilities && dataPokemon?.abilities[0].ability.name}
            </Text>
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.titlesDesciption}>Breeding</Text>
          <View style={{ ...styles.pokedexDataDetail }}>
            {/* style grey */}
            <Text style={styles.infoDetail}>EggGroup</Text>
            {/* style bold dx */}
            <Text style={styles.dxDetail}> {dataPokemon.name}</Text>
          </View>
          <View style={{ ...styles.pokedexDataDetail }}>
            {/* style grey */}
            <Text style={styles.infoDetail}>Gender</Text>
            {/* style bold dx */}
            <Text style={styles.dxDetail}></Text>
          </View>
          <View style={{ ...styles.pokedexDataDetail }}>
            {/* style grey */}
            <Text style={styles.infoDetail}>Hatching Step</Text>
            {/* style bold dx */}
            <Text style={styles.dxDetail}></Text>
          </View>
        </View>
      </View>

      <BaseStats stats={dataPokemon.stats} />
    </View>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  containerDataPokemon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // 2 title
  titlesDesciption: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textPokedexDetail: {
    fontSize: 30,
    textTransform: "capitalize",
    fontWeight: "bold",
    margin: 5,
    textAlign: "center",
  },
  //column first
  pokedexDataDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  //detail in grey
  infoDetail: {
    color: "grey",
    fontWeight: "bold",
    paddingTop: 10,
  },
  dxDetail: {
    fontWeight: "bold",
    paddingTop: 7,
    left: 8,
  },
});

// ho importato il mio componente custombuttom poi gli ho detto che al mio premere prima è su Allpokemon che
// è il nome che ho definito sula rootNavigator
// poi gli ho dato un testo coon text e sotto con {pokemon} mi torna il nome specifico
