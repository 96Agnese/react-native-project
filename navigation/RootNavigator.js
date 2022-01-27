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
        //nome iniziare che defisco io
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

// RootNavigator e la mia variabile che definisco io
// createNativeStackNavigator(); è una funzione della libreria di navigation contiene 2 proprietà : screen, navigator , navigator contiene screen
// const AuthNavigator = () => { --> è un componente che definisco la mia route
//     <NavigationContainer>  --> componente che mi wrappa il tutto
//        <RootNavigator.Navigator --> rootnavigator deriva dalla mia variabile che definisco sopra, poi accetta dei parametri
//                               initialRouteName --> parametro in cui devo dare un nome che voglio che andrà
// nella pagina di pokemonDetails
//                                 screenOptions --> è una props che mi nasconde l'header di default in alto
//         <RootNavigator.Screen name="AllPokemon" component={Home} /> -->  devo dargli un nome che ho definito sopra e il componente principale che
// in questo caso è home dove racchiude i bottoni sopra e la grigliacardpokemon
//         <RootNavigator.Screen name="PokemonDetails" component={PokemonDetails} /> --> pagina successiva
