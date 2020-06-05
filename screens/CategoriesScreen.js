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
import {and} from 'react-native-reanimated';

const CategoriesScreen = props => {
  //console.log(props);
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
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
  gridItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 22,
    height: 150,
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

export default CategoriesScreen;
