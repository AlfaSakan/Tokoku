import React from 'react';
import {ColorValue, StyleSheet, TouchableHighlight} from 'react-native';
import {colors} from '../../assets/colors';
import TypographyText from './TypographyText';

interface Props {
  height?: number | string;
  width?: number | string;
  backgroundColor?: ColorValue;
  onPress?: () => void;
  underlayColor?: ColorValue;
  text?: string;
  color?: ColorValue;
}

const Button: React.FC<Props> = ({
  backgroundColor = colors.blue1,
  height,
  width,
  underlayColor,
  onPress,
  text = 'Button',
  color,
  ...props
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlayColor}
      style={[
        styles.button,
        {
          backgroundColor,
          height,
          width,
        },
      ]}>
      <TypographyText text={text} color={color} {...props} />
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
});
