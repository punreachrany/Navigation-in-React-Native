import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import React from "react";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorite",
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          console.log("Press tab");
          navData.navigation.toggleDrawer();
        }}
      >
        <Text>===</Text>
      </TouchableOpacity>
    ),
  };
};

export default FavoritesScreen;
