import * as Font from "expo-font";

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
      // <AppLoading startAsyc={fetchFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
  return (
    <View style={styles.screen}>
      <Text font>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
