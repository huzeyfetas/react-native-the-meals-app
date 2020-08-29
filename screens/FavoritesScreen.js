import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtons';
import {useSelector} from 'react-redux';

const FavoritesScreen = props => {
  const FavMeals = useSelector(state => state.meals.favoritedMeals);

  // const FavMeals = availableMeals.filter(
  //   meal => meal.id === 'm1' || meal.id === 'm2',
  // ); damyy datadan geldi

  return <MealList listData={FavMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="nav-icon-a"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };

  // headerStyle: {
  //   backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  // },
  // headerStyle:
  //   Platform.OS === 'android'
  //     ? {backgroundColor: Colors.primaryColor}
  //     : {backgroundColor: 'white'},
  // headerTintColor:
  //   Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
