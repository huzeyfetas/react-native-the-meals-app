import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
// import Fontisto from 'react-native-vector-icons/Fontisto';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButtons';
import DefaultTextComp from '../components/DefaultTextComp';
import {useSelector} from 'react-redux';

const ListItem = props => {
  return (
    <View style={styles.listOfItem}>
      <DefaultTextComp>{props.children}</DefaultTextComp>
    </View>
  );
};

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector(state => state.meals.meals);

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={{...styles.mealRow, ...styles.meatDetail}}>
        <DefaultTextComp>{selectedMeal.duration}m</DefaultTextComp>
        <DefaultTextComp>
          {selectedMeal.complexity.toUpperCase()}
        </DefaultTextComp>
        <DefaultTextComp>
          {selectedMeal.affordability.toUpperCase()}
        </DefaultTextComp>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem style={styles.textOfList} key={ingredient}>
          {ingredient}
        </ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem style={styles.textOfList} key={step}>
          {step}
        </ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="star"
          onPress={() => console.log('star tiklandi ??')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealRow: {
    flexDirection: 'row',
  },
  meatDetail: {
    padding: 15,
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  listOfItem: {
    marginVertical: 7,
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default MealDetailScreen;
