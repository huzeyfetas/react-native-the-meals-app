import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
// import {and} from 'react-native-reanimated';
import CategoryGridItem from '../components/CategoryGridItem';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridItem
        color={itemData.item.color}
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      renderItem={renderGridItem}
    />
    // <View>
    //   <Text>1</Text>
    // </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Kategoriler',

  headerTitleAlign: 'center',

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

export default CategoriesScreen;
