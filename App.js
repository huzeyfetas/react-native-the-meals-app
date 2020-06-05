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

enableScreens();
//bu enableScreen ile sanki bir ekran geçiş efekti değişti ?

const App: () => React$Node = () => {
  return <MealsNavigator />;
};

const styles = StyleSheet.create({});

export default App;
