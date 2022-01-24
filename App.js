import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./Components/CustomButton";
import GridCardPokemon from "./Components/GridCardPokemon";

function App() {
  return (
    <View style={styles.container}>
      {/* modifico il mio componente in inline styles che vuol dire direttamente sul componente */}
      {/*  style navbar */}
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
      <View>
        <GridCardPokemon />
      </View>

      {/* <CustomButton
        text="Bottone giallo"
        onPress={() => {}}
        color="warning"
        icon="trash"
        iconPosition="right"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },

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

export default App;
