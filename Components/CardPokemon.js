import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TypesButtons from "./TypesButtons";
import { useNavigation } from "@react-navigation/core";

const CardPokemon = ({ name, url, onDelete }) => {
  const navigation = useNavigation();
  const [details, setDetails] = useState();

  useEffect(() => {
    async function getDetailsPokemon() {
      const responce = await axios.get(url);
      setDetails(responce.data);
    }
    getDetailsPokemon();
  }, []);

  //prova
  return (
    <TouchableOpacity onPress={() => navigation.navigate("PokemonDetails", { pokemon: name })}>
      <View>
        {details && (
          <Image source={{ uri: details.sprites.front_default }} style={styles.ImgContainer} />
        )}
      </View>
      <View>
        {/* <TouchableOpacity onPress={() => onDelete(name)}>
        </TouchableOpacity> */}
        <Text style={styles.textName}>{name}</Text>
      </View>

      <View>
        <Text style={styles.textId}> {details?.id}</Text>
      </View>

      <View>
        <Text style={styles.textAbility}>Ability: {details?.abilities[0].ability.name}</Text>
      </View>

      {/* non accetta solo l'id come il {name} perchè dentro l'url c'è già il mio dato invece name era dentro un altro url */}
      <View>
        <Text>
          {details?.types.map((item) => {
            return <TypesButtons name={item.type.name} color={item.type.name} />;
          })}
        </Text>
      </View>

      {/* creato la mappa che mi torna un elemento o + 
      details è il mio useState che ho creto qui dentro
      types è primo elemento dell'array
      item elemento che creo io di default
      <TypesButtons è il mio componente che importo */}
    </TouchableOpacity>
  );
};

export default CardPokemon;

const styles = StyleSheet.create({
  ImgContainer: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    height: 120,
    width: 120,
    margin: 8,
    borderRadius: 20,
  },
  textName: {
    textTransform: "capitalize",
    fontWeight: "bold",
    textAlign: "center",
  },
  textId: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
  },
  textAbility: {
    fontWeight: "400",
  },
});
