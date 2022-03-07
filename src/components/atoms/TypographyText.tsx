import React from 'react';
import {ColorValue, Text} from 'react-native';

interface Props {
  text?: string;
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  color?: ColorValue;
}

const TypographyText: React.FC<Props> = ({
  text = '',
  fontFamily,
  fontSize,
  lineHeight,
  color,
}) => {
  return <Text style={{fontFamily, fontSize, lineHeight, color}}>{text}</Text>;
};

export default TypographyText;
