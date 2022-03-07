import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../assets/colors';
import {responsiveWidth} from '../../utils/responsiveUI';

const Dot = ({marginRight = 0}) => {
  return <View style={[styles.dot, {marginRight}]} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    width: responsiveWidth(4),
    height: responsiveWidth(4),
    borderRadius: responsiveWidth(4),
    backgroundColor: colors.black,
  },
});
