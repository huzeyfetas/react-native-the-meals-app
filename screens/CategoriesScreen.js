import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = props => {
  //console.log(props);
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate('CategoryMeals');
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

export default CategoriesScreen;

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
    borderRadius: 8,
  },
});
