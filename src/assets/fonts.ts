export const fontFamily = {
  poppinsBlack: 'Poppins-Black',
  poppinsBlackItalic: 'Poppins-BlackItalic',
  poppinsBold: 'Poppins-Bold',
  poppinsBoldItalic: 'Poppins-BoldItalic',
  poppinsExtraBold: 'Poppins-ExtraBold',
  poppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic',
  poppinsExtraLight: 'Poppins-ExtraLight',
  poppinsExtraLightItalic: 'Poppins-ExtraLightItalic',
  poppinsItalic: 'Poppins-Italic',
  poppinsLight: 'Poppins-Light',
  poppinsLightItalic: 'Poppins-LightItalic',
  poppinsMedium: 'Poppins-Medium',
  poppinsMediumItalic: 'Poppins-MediumItalic',
  poppinsRegular: 'Poppins-Regular',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',
  poppinsThin: 'Poppins-Thin',
  poppinsThinItalic: 'Poppins-ThinItalic',
};

export const fontSize = {
  h1: 26,
  h2: 24,
  h3: 22,
  h4: 20,
  subtitle: 18,
  largeText: 16,
  mediumText: 14,
  smallText: 12,
  caption: 10,
  belowCaption: 8,
};

export const lineHeight = {
  h1: 26 * 1.5,
  h2: 24 * 1.5,
  h3: 22 * 1.5,
  h4: 20 * 1.5,
  subtitle: 18 * 1.5,
  largeText: 16 * 1.5,
  mediumText: 14 * 1.5,
  smallText: 12 * 1.5,
  caption: 10 * 1.5,
  belowCaption: 8 * 1.5,
};

export const largeTypography = {
  fontFamily: fontFamily.poppinsSemiBold,
  fontSize: fontSize.largeText,
  lineHeight: lineHeight.largeText,
};

export const mediumTypography = {
  fontFamily: fontFamily.poppinsMedium,
  fontSize: fontSize.mediumText,
  lineHeight: lineHeight.mediumText,
};

export const smallTypography = {
  fontFamily: fontFamily.poppinsRegular,
  fontSize: fontSize.smallText,
  lineHeight: lineHeight.smallText,
};

export const captionTypography = {
  fontFamily: fontFamily.poppinsMedium,
  fontSize: fontSize.caption,
  lineHeight: lineHeight.caption,
};
