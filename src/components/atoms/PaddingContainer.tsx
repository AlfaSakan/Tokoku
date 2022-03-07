import React from 'react';
import {View} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveUI';

interface Props {
  children: React.ReactNode;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

const PaddingContainer: React.FC<Props> = ({
  children,
  paddingHorizontal = 30,
  paddingVertical = 0,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: responsiveWidth(paddingHorizontal),
        paddingVertical: responsiveHeight(paddingVertical),
      }}>
      {children}
    </View>
  );
};

export default PaddingContainer;
