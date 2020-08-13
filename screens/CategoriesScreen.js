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
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtons';

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

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Kategoriler',
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

export default CategoriesScreen;
