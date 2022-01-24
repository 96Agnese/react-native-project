import React from "react";
import { Alert, StyleSheet, Button, View, Text, TouchableOpacity } from "react-native";
import Colors from "../assets/theme/Colors";
import { Ionicons } from "@expo/vector-icons";

function CustomButton({
  text,
  onPress = () => Alert.alert("okay hai cliccato"),
  //utilizza la funzione che gli passo qui dentro nel caso non la passassi al componente 
  styleContainer,
  styleText,
  color,
  icon,
  iconPosition = "left ",
}) {
  //qui dentro gli passo tutto ciò che voglio modificare e decido io come chiamarli qui assegno solo
  // nell'app.js invece agisco e faccio cambiare i componenti

  const getBgColor = () => {
    // In base al color passato come prop restituisce il bgColor corrispondente
    //color è un valore che ho passato sopra quindi posso richiamarlo con if

    switch (color) {
      case "primary":
        return Colors.primary;
      case "danger":
        return Colors.danger;
      case "warning":
        return Colors.warning;
      case "success":
        return Colors.success;
      case "secondary":
        return Colors.secondary;
      default:
        return Colors.primary;
    }

    // if (color === "primary") return Colors.primary;
    // if (color === "danger") return Colors.danger;
    // if (color === "warning") return Colors.warning;
    // if (color === "success") return Colors.success;
    // if (color === "secondary") return Colors.secondary;
    // return Colors.primary;
  };

  const getTextColor = () => {
    if (color === "warning") return Colors.dark;
    else return Colors.light;
  };

  // color è la props sopra
  //Colors è l'oggetto che è esportato dentro al file assets/theme/Colors.js

  return (
    <TouchableOpacity
      style={{
        ...styles.btnContainer,
        ...styleContainer,
        backgroundColor: getBgColor(),
        flexDirection: iconPosition === "left" ? "row" : "row-reverse",
      }}
      onPress={onPress}
    >
      {icon && (
        <Ionicons
          name={icon}
          style={{ ...styles.btnText, ...styles.btnIcon, color: getTextColor() }}
        />
      )}

      <Text style={{ ...styles.btnText, ...styleText, color: getTextColor() }}>{text}</Text>
    </TouchableOpacity>
  );
}

//creo tutti i miei stili
const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  btnIcon: {
    marginRight: 10,
  },
  btnText: {
    fontWeight: "bold",
  },
});

export default CustomButton;
