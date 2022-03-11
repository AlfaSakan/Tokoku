import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../assets/colors';
import {responsiveWidth} from '../../utils/responsiveUI';

interface Props {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  children: React.ReactNode;
}

const Dropdown: React.FC<Props> = ({top, right, bottom, left, children}) => {
  return (
    <View style={[styles.container, {top, bottom, right, left}]}>
      {children}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: colors.white,
    padding: responsiveWidth(10),
    borderWidth: 1,
    borderColor: colors.gray3,
    borderRadius: responsiveWidth(8),

    width: responsiveWidth(100),

    alignItems: 'center',
    justifyContent: 'center',

    // SHADOW IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // SHADOW ANDROID
    elevation: 5,
  },
});
