import React from 'react';
import {ColorValue, Text} from 'react-native';

interface Props {
  text?: string;
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  color?: ColorValue;
  textAlign?: 'auto' | 'center' | 'left' | 'right' | 'justify';
}

const TypographyText: React.FC<Props> = ({
  text = '',
  fontFamily,
  fontSize,
  lineHeight,
  color,
  textAlign,
}) => {
  return (
    <Text style={{fontFamily, fontSize, lineHeight, color, textAlign}}>
      {text}
    </Text>
  );
};

export default TypographyText;
