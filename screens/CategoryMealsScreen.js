import React from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  console.log(selectedCategory);

  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
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

//burada önemli olan şey şu bu sayfa 1 tane ve gelen parametreye göre şekillenecek ama burada yazılan stillendirme işlemleri falan mesela sayfanın adı yine gelen parametreye göre şekillenecek. ama bu navigationOptions olaylarında gelen parametreye eriştmek yok aslında var da props değil adı navigationData yada navData yada navProps de fark etmez bu şekilde geliyor. bunun üzerinden yine nesneyi yakalyıp öyle adlandırma şekillendirme yapacağız bu cidden önemli !!!!

CategoryMealsScreen.navigationOptions = navigataionData => {
  const catId = navigataionData.navigation.getParam('categoryId');

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
