import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { colors } from '../../colors';

export default function CameraGradientIcon({
  height = 18,
  width = 18,
  colorIcon = colors.purpleLinear,
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.44 6.2364C17.48 6.30633 17.55 6.35627 17.64 6.35627C20.04 6.35627 22 8.3141 22 10.7114V16.6448C22 19.0422 20.04 21 17.64 21H6.36C3.95 21 2 19.0422 2 16.6448V10.7114C2 8.3141 3.95 6.35627 6.36 6.35627C6.44 6.35627 6.52 6.31632 6.55 6.2364L6.61 6.11654C6.64448 6.04397 6.67987 5.96943 6.71579 5.89376C6.97161 5.35492 7.25463 4.75879 7.43 4.40844C7.89 3.50943 8.67 3.00999 9.64 3H14.35C15.32 3.00999 16.11 3.50943 16.57 4.40844C16.7275 4.72308 16.9674 5.2299 17.1987 5.71839C17.2464 5.81921 17.2938 5.91924 17.34 6.01665L17.44 6.2364ZM16.71 10.0721C16.71 10.5716 17.11 10.9711 17.61 10.9711C18.11 10.9711 18.52 10.5716 18.52 10.0721C18.52 9.5727 18.11 9.16315 17.61 9.16315C17.11 9.16315 16.71 9.5727 16.71 10.0721ZM10.27 11.6204C10.74 11.1509 11.35 10.9012 12 10.9012C12.65 10.9012 13.26 11.1509 13.72 11.6104C14.18 12.0699 14.43 12.6792 14.43 13.3285C14.42 14.667 13.34 15.7558 12 15.7558C11.35 15.7558 10.74 15.5061 10.28 15.0466C9.82 14.5871 9.57 13.9778 9.57 13.3285V13.3185C9.56 12.6892 9.81 12.0799 10.27 11.6204ZM14.77 16.1054C14.06 16.8147 13.08 17.2542 12 17.2542C10.95 17.2542 9.97 16.8446 9.22 16.1054C8.48 15.3563 8.07 14.3774 8.07 13.3285C8.06 12.2897 8.47 11.3108 9.21 10.5616C9.96 9.81243 10.95 9.40289 12 9.40289C13.05 9.40289 14.04 9.81243 14.78 10.5516C15.52 11.3008 15.93 12.2897 15.93 13.3285C15.92 14.4173 15.48 15.3962 14.77 16.1054Z"
        fill="url(#paint0_linear_930_2404)"
      />
      <Path
        d="M17.4955 9.5H17.5045"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.1788 13.128C15.1788 11.372 13.7558 9.94897 11.9998 9.94897C10.2438 9.94897 8.8208 11.372 8.8208 13.128C8.8208 14.884 10.2438 16.307 11.9998 16.307C13.7558 16.307 15.1788 14.884 15.1788 13.128Z"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_930_2404"
          x1="21.5"
          y1="22"
          x2="-3.83778"
          y2="20.1374"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor={colorIcon[0]} stopOpacity="1" />
          <Stop offset="1" stopColor={colorIcon[1]} stopOpacity="1" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
