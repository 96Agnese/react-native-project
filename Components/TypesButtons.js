import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Colors from "../assets/theme/Colors";

const TypesButtons = ({ name, color, containerBottom }) => {
  const getBgColorButton = () => {
    switch (color) {
      case "grass":
        return Colors.grass;
      case "poison":
        return Colors.poison;
      case "fire":
        return Colors.fire;
      case "flying":
        return Colors.flying;
      case "water":
        return Colors.water;
      case "bug":
        return Colors.bug;
      case "normal":
        return Colors.normal;
    }
  };
  return (
    <View>
      <Text
        style={{
          ...styles.textTypes,
          backgroundColor: getBgColorButton(),
          ...containerBottom,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TypesButtons;

const styles = StyleSheet.create({
  textTypes: {
    margin: 4,
    textAlign: "center",
    textTransform: "capitalize",
    color: "white",
    fontWeight: "bold",
    padding: 5,
    marginTop: 9,
  },
  containerBottom: {
    borderRadius: 5,
  },
});
