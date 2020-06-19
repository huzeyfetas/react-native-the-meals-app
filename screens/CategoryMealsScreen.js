import React from 'react';
import {StyleSheet, Text, View, Button, Platform, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
  //onSelectMeal
  const renderMealItem = itemData => {
    console.log('rendermealitem içine gelen itemdata => ', itemData);

    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate('MealDetail', {mealId: itemData.item.id});
        }}
      />
    );
  };

  const catId = props.navigation.getParam('categoryId');

  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  const displayedMeal = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  // console.log(selectedCategory);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%', padding: 10}}
      />
    </View>
  );
};

//burada önemli olan şey şu bu sayfa 1 tane ve gelen parametreye göre şekillenecek ama burada yazılan stillendirme işlemleri falan mesela sayfanın adı yine gelen parametreye göre şekillenecek. ama bu navigationOptions olaylarında gelen parametreye eriştmek yok aslında var da props değil adı navigationData yada navData yada navProps de fark etmez bu şekilde geliyor. bunun üzerinden yine nesneyi yakalyıp öyle adlandırma şekillendirme yapacağız bu cidden önemli !!!!

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? selectedCategory.color : 'white',
    },
  };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
