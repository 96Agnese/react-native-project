import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CardPokemon = ({ name, url }) => {
  const [details, setDetails] = useState();

  useEffect(() => {
    async function getDetailsPokemon() {
      const responce = await axios.get(url);
      setDetails(responce.data);
    }
    getDetailsPokemon();
  }, []);

  return (
    <View>
      <View>
        {details && <Image source={{ uri: details.sprites.front_default }} style={styles.Img} />}
      </View>
      <View>
        <Text style={styles.textName}>{name}</Text>
      </View>
      <View>
        <Text style={styles.textId}> {details?.id}</Text>
      </View>

      <View>
        <Text style={styles.textAbility}>Ability: {details?.abilities[0].ability.name}</Text>
      </View>
    </View>
    // non accetta solo l'id come il {name} perchè dentro l'url c'è già il mio dato invece name era dentro un altro url
  );
};

export default CardPokemon;

const styles = StyleSheet.create({
  Img: {
    width: 100,
    height: 100,
    backgroundColor: "grey",
    height: 120,
    width: 120,
    margin: 8,
    borderRadius: 15,
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
