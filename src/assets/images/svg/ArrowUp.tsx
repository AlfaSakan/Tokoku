import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../colors';

const ArrowUp = ({height = 24, width = 24, colorIcon = colors.gray1}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.7261 4.25L11.7261 19.25"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.70149 10.2998L11.7255 4.2498L17.7505 10.2998"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ArrowUp;
