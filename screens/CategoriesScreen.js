import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const CategoriesScreen = (props) => {
  // console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate("CategoryMeals");
        }}
      />
      <Button
        title="Replace with Category Meals!"
        onPress={() => {
          props.navigation.replace("CategoryMeals");
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

export default CategoriesScreen;
