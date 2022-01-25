import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../assets/theme/Colors";

const TypesButtons = ({ name, color }) => {
  // funzione per i colori diversi

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
      <View
        style={{ backgroundColor: getBgColorButton(), borderRadius: 10, margin: 5, padding: 3 }}
      >
        <Text
          style={{
            ...styles.textTypes,
          }}
        >
          {name}
        </Text>
      </View>
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
  },
});
