import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../Components/CustomButton";

const PokemonDetails = ({ route, navigation }) => {
  const { pokemon } = route.params;
  return (
    <View>
      <CustomButton onPress={() => navigation.navigate("AllPokemon")} text="Go back" />
      <Text>Pokemon Details {pokemon}</Text>
    </View>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({});
