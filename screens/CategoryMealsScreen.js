import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button
        title="Go to Meals' Detail"
        onPress={() => {
          props.navigation.replace("MealDetail");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title="Pop"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
