import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../assets/theme/Colors";

// const myDog = {
//   name: 'fuffi',
//   age: 2,
//   height: 1,
//   provenienza: {
//       nazione: undefined,
//       data: [1, 2, 3]
//   }
// }

// function showDog({ name, age, height, provenienza, ...rest }, breed = "pastore tedesco") {
//   console.log(dog, breed) // Mostrare le proprietà del cane e la razza
//   console.log(name) // Mostra solo il nome

//   const { data: dataProvenzienza = "Italia" } = provenienza;
//   console.log(dataProvenzienza);
// }

// showDog(myDog)

const CustomText = ({ text, containerStyle, ...rest }) => {
  return (
    <View style={containerStyle}>
      {/* ... */}
      <Text {...rest}>{text}</Text>
    </View>
  );
};

const CustomButton = ({ text, icon, iconPosition = "left" }) => {
  return (
    // <TouchableOpacity style={{ flexDirection: "row" }}>
    //   <Text style={{ margin: 5, justifyContent: "space-between" }}>bac</Text>
    //   <Text style={{ margin: 5, justifyContent: "space-between" }}>ci</Text>
    // </TouchableOpacity>

    <TouchableOpacity
      style={{
        ...styles.buttonContainer,
        flexDirection: iconPosition === "left" ? "row" : "row-reverse",
      }}
    >
      <Ionicons style={styles.styleIcs} name={icon} color={Colors.light} />
      <CustomText text={text} containerStyle={{}} style={styles.styleTextBtn} />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "orange",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 7,
    // mi permette di allineare icona e testo
    flexDirection: "row",
    alignItems: "center",
  },

  styleTextBtn: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },

  styleIcs: {
    marginRight: 5,
    marginLeft: 5,
  },
});
