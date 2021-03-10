import { Platform, Text } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import Colors from "../constants/Colors";
import FavoriteScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FilterScreen";
import { Ionicons } from "@expo/vector-icons";
import MealDetailScreen from "../screens/MealDetailScreen";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";

// import Icon from "react-native-vector-icons/Ionicons";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },

    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const defaultStackNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },

  headerTitle: {},

  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,

  headerBackTitleStyle: {},
};

const FavNavigator = createStackNavigator(
  {
    Favorites: { screen: FavoriteScreen },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: defaultStackNavOption,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      // tabBarIcon: (tabInfo) => {
      //   return (
      //     // <Icon name="ios-restaurant" size={25} color={tabInfo.tintColor} />

      //     <Ionicons
      //       name="ios-restaurant"
      //       size={25}
      //       color={tabInfo.tintColor}
      //     />
      //   );
      // },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? <Text style={{}}>Meals!</Text> : "Meals!!!",
    },
    // navigationOptions: {
    //   tabBarColor: Colors.primaryColor,
    // },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      // tabBarIcon: (tabInfo) => {
      //   return (
      //     // <Icon name="ios-restaurant" size={25} color={tabInfo.tintColor} />

      //     <Ionicons
      //       name="ios-restaurant"
      //       size={25}
      //       color={tabInfo.tintColor}
      //     />
      //   );
      // },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{}}>Favorites!</Text>
        ) : (
          "Favorites!!!"
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.accentColor,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            // fontFamily: '',
          },
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator({
  Filters: FilterScreen,
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
  },
  Filters: {
    screen: FiltersNavigator,
  },
});

export default createAppContainer(MainNavigator);
