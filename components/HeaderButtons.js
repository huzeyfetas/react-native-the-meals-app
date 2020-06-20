import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
// import {Icon} from 'react-native-vector-icons';
// import {Icon} from 'react-native-elements';
import Fontisto from 'react-native-vector-icons/Fontisto';
// Bu önemli bir detay bu fontisto yu IconComponent adında props olarak göndereceğiz.
// onun için Icon değil de direk reat-native-vector-icons altındaki bir js e ait
// componenti gönderdik !!!!  trick

import {Colors} from '../constants/Colors';

const CustomHeaderButtons = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Fontisto}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButtons;

const styles = StyleSheet.create({});
