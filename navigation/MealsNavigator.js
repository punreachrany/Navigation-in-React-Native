import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MealsNavigator = createStackNavigator({
  Categories: { screen: CategoriesScreen },

  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions: {
      headerTitle: null,
    },
  },
  MealDetail: {
    screen: MealDetailScreen,
    navigationOptions: {
      headerTitle: null,
    },
  },
});

export default createAppContainer(MealsNavigator);