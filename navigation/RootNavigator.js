import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import PokemonDetails from "../screen/PokemonDetails";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../Components/Header";

const RootNavigator = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Header />
      <RootNavigator.Navigator
        initialRouteName="AllPokemon"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootNavigator.Screen name="AllPokemon" component={Home} />
        <RootNavigator.Screen name="PokemonDetails" component={PokemonDetails} />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
