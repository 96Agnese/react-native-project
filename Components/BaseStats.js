import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const BaseStats = ({ stats }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.titlesDesciption}>Base Stats</Text>
      <ScrollView horizontal>
        {/* <View style={styles.containerStats}> */}
        {stats &&
          stats.map((item) => {
            return (
              <View style={styles.statContainer}>
                <Text style={styles.elementStats}>{item.stat.name}</Text>
                <Text>{item.base_stat}</Text>
              </View>
            );
          })}
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default BaseStats;

const styles = StyleSheet.create({
  titlesDesciption: {
    fontWeight: "bold",
    fontSize: 20,
  },

  containerStats: {
    flexDirection: "row",
  },
  statContainer: {
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "red",
    padding: 8,
    margin: 10,
    // IOS
    shadowColor: "grey",
    shadowOffset: {
      width: 2,
      height: 45,
    },

    // va da 0 a 1
    shadowOpacity: 0.7,
    // infinity
    shadowRadius: 20,

    // Android
    elevation: 20,
  },
  elementStats: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
