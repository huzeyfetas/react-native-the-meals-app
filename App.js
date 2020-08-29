import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';
import mealReducer from './store/reducers/meal';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  meals: mealReducer,
});

const store = createStore(rootReducer);

enableScreens();
//bu enableScreen ile sanki bir ekran geçiş efekti değişti ?

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

export default App;
