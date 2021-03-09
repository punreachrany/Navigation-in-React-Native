import { Platform, Text, View } from "react-native";

import Colors from "../constants/Colors";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomHeaderButton = (props) => {
  const favColor = Platform.OS === "android" ? "white" : Colors.primaryColor;
  return (
    // <View style={{ backgroundColor: Colors.primaryColor }}>
    <TouchableOpacity
      onPress={() => {
        console.log("Punreach is cool!");
      }}
    >
      <View>
        <Text style={{ color: favColor }}>FAV!</Text>
      </View>
    </TouchableOpacity>

    // <HeaderButton
    //   {...props}
    //   IconComponent={Ionicons}
    //   iconSize={23}
    //   color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    // />
  );
};

export default CustomHeaderButton;
