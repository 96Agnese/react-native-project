import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../Components/CustomButton";
import GridCardPokemon from "../Components/GridCardPokemon";

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          minWidth: "100%",
          padding: 18,
        }}
      >
        <CustomButton
          text="NEXT"
          icon="caret-back-outline"

          // onPress={() => Alert.alert("hai cliccato il bottone blu")}
          // color="primary"
        />
        <CustomButton text="PREVIOUS" icon="caret-forward-outline" iconPosition="right" />
      </View>

      <GridCardPokemon />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
});
