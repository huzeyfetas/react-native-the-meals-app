import React from 'react';
import {StyleSheet, Text, View, Button, Platform, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  const displayedMeal = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  return <MealList listData={displayedMeal} navigation={props.navigation} />;
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
