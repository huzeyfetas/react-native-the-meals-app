import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button
        title="dede"
        onPress={() => {
          props.navigation.navigate('MealDetail');
          // props.navigation.navigate({routeName: 'MealDetail'});
        }}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
