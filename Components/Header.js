import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import React from "react";

// modifico il mio componente in inline styles che vuol dire direttamente sul componente
// style navbar

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        height: "20%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* //widget che mi da l'effetto al tocco */}
      <TouchableOpacity>
        {/* modifico il mio componente tramite referenza e sotto applico gli stili */}
        <Text style={styles.baseText}>
          LIST
          <Text style={styles.innerText}> CARD</Text>
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 27,
  },

  innerText: {
    fontWeight: "bold",
    color: "orange",
    fontSize: 27,
  },
});
