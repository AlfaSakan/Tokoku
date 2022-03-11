import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import {colors} from '../../colors';

export default function HomeGradientIcon({
  height = 18,
  width = 18,
  colorIcon = colors.purpleLinear,
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714"
        fill="url(#paint0_linear_930_2404)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_930_2404"
          x1="21.5"
          y1="22"
          x2="-3.83778"
          y2="20.1374"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={colorIcon[0]} stopOpacity="1" />
          <Stop offset="1" stopColor={colorIcon[1]} stopOpacity="1" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
