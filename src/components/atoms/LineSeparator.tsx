import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../assets/colors';

const LineSeparator = () => {
  return <View style={styles.lineSeparator} />;
};

export default LineSeparator;

const styles = StyleSheet.create({
  lineSeparator: {
    borderWidth: 0.5,
    borderColor: colors.gray3,
  },
});
