import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../colors';

export default function LockIcon({ height = 18, width = 18, colorIcon = colors.gray1 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.4232 9.4478V7.3008C16.4232 4.7878 14.3852 2.7498 11.8722 2.7498C9.35925 2.7388 7.31325 4.7668 7.30225 7.2808V7.3008V9.4478"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.683 21.2496H8.042C5.948 21.2496 4.25 19.5526 4.25 17.4576V13.1686C4.25 11.0736 5.948 9.37659 8.042 9.37659H15.683C17.777 9.37659 19.475 11.0736 19.475 13.1686V17.4576C19.475 19.5526 17.777 21.2496 15.683 21.2496Z"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.8628 14.2028V16.4238"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
