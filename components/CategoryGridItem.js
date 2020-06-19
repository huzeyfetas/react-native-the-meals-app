import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors';

import {CATEGORIES} from '../data/dummy-data';

const CategoryGridItem = props => {
  let CCTouchableCompt = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    CCTouchableCompt = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <CCTouchableCompt style={{flex: 1}} onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text numberOfLines={2} style={styles.textStyle}>
            {props.title}
          </Text>
        </View>
      </CCTouchableCompt>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden', //buradaki borderradius ve overlow containerdeki borderradius ile aynı degerde olmalı
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 8,
    elevation: 5,
  },
  textStyle: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold.ttf',
    textAlign: 'right',
  },
});

export default CategoryGridItem;
