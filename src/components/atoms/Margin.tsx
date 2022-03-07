import React from 'react';
import {View} from 'react-native';
import {responsiveHeight} from '../../utils/responsiveUI';

const Margin = ({margin = 10}) => {
  return <View style={{marginTop: responsiveHeight(margin)}} />;
};

export default Margin;
