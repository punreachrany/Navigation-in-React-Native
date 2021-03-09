import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import React from "react";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData)
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
