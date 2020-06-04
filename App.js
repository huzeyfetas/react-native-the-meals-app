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

const App: () => React$Node = () => {
  return <MealsNavigator />;
};

const styles = StyleSheet.create({});

export default App;
