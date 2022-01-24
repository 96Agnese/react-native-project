import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Colors from "../assets/theme/Colors";

const TypesButtons = ({ name, color }) => {
  const getBgColorButton = () => {
    switch (color) {
      case "grass":
        return Colors.grass;
      case "poison":
        return Colors.poison;
    }
  };

  return (
    <View>
      <Text style={styles.textTypes}>{name}</Text>
    </View>
  );
};

export default TypesButtons;

const styles = StyleSheet.create({
  textTypes: {
    margin: 4,
    textAlign: "center",
    textTransform: "capitalize",
  },
});
