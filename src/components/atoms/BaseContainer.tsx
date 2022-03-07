import React from 'react';
import {
  ColorValue,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../../assets/colors';

interface Props {
  children: React.ReactNode;
  backgroundColor?: ColorValue;
}

const {width, height} = Dimensions.get('window');

const BaseContainer: React.FC<Props> = ({
  children,
  backgroundColor = colors.white,
}) => {
  return (
    <SafeAreaView style={{backgroundColor}}>
      <View style={[styles.container, {backgroundColor}]}>{children}</View>
    </SafeAreaView>
  );
};

export default BaseContainer;

const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
});
