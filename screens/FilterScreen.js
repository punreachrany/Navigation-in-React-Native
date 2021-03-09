import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const FilterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Filter Screen</Text>
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterScreen;
