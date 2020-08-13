import React from 'react';
import {createAppContainer} from 'react-navigation'; //react-navigataion
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
//react-navigation-stack
// ! attention path !
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {HeaderButton, Item} from 'react-navigation-header-buttons';
import HeaderButtons from '../components/HeaderButtons';

const defaultStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTintColor: Platform.OS === 'android' ? 'black' : 'black',
};

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
    defaultNavigationOptions: defaultStackNavigationOptions,
  },
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  },
);

const tabScreenConfig = {
  Meal: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Restorant',
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor, //ios tarafından okunmaz bu kodlar sadece android okuyor. material button içinden olan navigator ile
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorilerim',
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: 'purple', //ios tarafından okunmaz bu kodlar sadece android okuyor. material button içinden olan navigator ile
    },
  },
};

const MealFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.accentColor,
        shifting: true, //icon büyüyüp kücülüyor //bunu false yapacaksa kötü durur diye ayrıca bir de barStyle keyi ile değer ekliyoruz. ama true olacaksa buna gerek yok shift ile barStyle birlikte calısmaz biri true ise diğeri yok biri varsa diğer false

        barStyle: {
          backgroundColor: 'black',
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          inactiveTintColor: 'gray',
          activeTintColor: Colors.accentColor,
        },
      });

const FilterNavitator = createStackNavigator(
  {
    screen: FiltersScreen,
  },
  {
    navigationOptions: {
      drawerLabel: 'Filters', // ya burada isimlendireceksin yad 119.satırda uzun formda
    },
    defaultNavigationOptions: defaultStackNavigationOptions,
  },
);

const MainDrawerNavigator = createDrawerNavigator(
  {
    MealFavs: {
      screen: MealFavTabNavigator,
      navigationOptions: {drawerLabel: 'Meals'},
    },
    Filters: FilterNavitator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontWeight: '700',
        fontSize: 16,
      },
    },
  },
);

export default createAppContainer(MainDrawerNavigator);
