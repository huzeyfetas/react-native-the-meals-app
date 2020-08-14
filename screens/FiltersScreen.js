import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Switch, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtons';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        // switch background rengi false gri true dinamik renk
        trackColor={{true: Colors.primaryColor}}
        thumbColor={Platform.OS === 'android' ? Colors.accentColor : ''}
        value={props._state}
        onValueChange={props._setState}
        // val o anki durumdur. yani falsedan true a mı geçti. val değeri true olur.
      />
    </View>
  );
};

const FiltersScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLaktosFree, setIsLaktosFree] = useState(false);
  const [isVeganFree, setIsVeganFree] = useState(false);
  const [isVegeterianFree, setIsVegeterianFree] = useState(false);

  const {navigation} = props;

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      laktosFree: isLaktosFree,
      vegan: isVeganFree,
      isVegeterian: isVegeterianFree,
    };
    console.log('appliedFilters', appliedFilters);
  }, [isGlutenFree, isLaktosFree, isVeganFree, isVegeterianFree]);

  useEffect(() => {
    navigation.setParams({save: saveFilters}); // save keyi ile saveFilters metodunu point ettik. bu navigasyon nesnesine gitmesine izin verir. yani elimizdeki güncel stateleri gider navigasyon nesnesinde save keywordu ile set eder.
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label="Gluten"
        _state={isGlutenFree}
        _setState={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Laktos"
        _state={isLaktosFree}
        _setState={newValue => setIsLaktosFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        _state={isVeganFree}
        _setState={newValue => setIsVeganFree(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        _state={isVegeterianFree}
        _setState={newValue => setIsVegeterianFree(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filters',
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="save"
          onPress={navData.navigation.getParam('save')}
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
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default FiltersScreen;
