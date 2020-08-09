import React from 'react';
import {createAppContainer} from 'react-navigation'; //react-navigataion
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//react-navigation-stack
// ! attention path !
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? '#EDE84A' : 'white',
        },
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? '#EDE84A' : 'white',
          //bunu da categoryMealsdaki gibi dinamik bir şekilde aynı renk ile yapmayı deneyebiliriz.
        },
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerTintColor: Platform.OS === 'android' ? 'black' : 'black',
    },
  },
);

const MealFavTabNavigator = createBottomTabNavigator(
  {
    Meal: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarLabel:'Restorant',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel:'Favorilerim',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      inactiveTintColor: 'gray',
      activeTintColor: Colors.accentColor,
    },
  },
);

export default createAppContainer(MealFavTabNavigator);
