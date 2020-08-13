import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DefaultTextComp = props => {
  return (
    <View>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    // fontWeight: '700',
    fontFamily: 'OpenSans-Bold.ttf', // işe yaramıyor çözüm bul
    // fontFamily: OpenSans-Bold,
  },
});

export default DefaultTextComp;
