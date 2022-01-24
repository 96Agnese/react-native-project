import { StyleSheet, View, Text } from "react-native";
import React from "react";

const TypesButtons = (props) => {
  return (
    <View>
      <Text style={styles.textTypes}>{props.name}</Text>
    </View>
  );
};

export default TypesButtons;

const styles = StyleSheet.create({
  textTypes: {
    margin: 4,
    textAlign: "center",
  },
});
