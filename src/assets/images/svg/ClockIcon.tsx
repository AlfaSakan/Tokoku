import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {responsiveWidth} from '../../../utils/responsiveUI';

export default function ClockIcon({
  width = 20,
  height = 20,
  color = '#7B6F72',
}) {
  return (
    <Svg
      width={responsiveWidth(width)}
      height={responsiveWidth(height)}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7082 10.0003C17.7082 14.2578 14.2573 17.7087 9.99984 17.7087C5.74234 17.7087 2.2915 14.2578 2.2915 10.0003C2.2915 5.74283 5.74234 2.29199 9.99984 2.29199C14.2573 2.29199 17.7082 5.74283 17.7082 10.0003Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.8594 12.4524L9.71777 10.5782V6.53906"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
