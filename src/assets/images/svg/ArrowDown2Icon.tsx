import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../colors';

export default function ArrowDown2Icon({
  height = 24,
  width = 24,
  colorIcon = colors.gray1,
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 8.5L12 15.5L5 8.5"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
