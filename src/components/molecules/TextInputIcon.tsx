import React from 'react';
import {
  ColorValue,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../assets/colors';
import {fontFamily, mediumTypography} from '../../assets/fonts';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveUI';
import Margin from '../atoms/Margin';
import TypographyText from '../atoms/TypographyText';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
  onPress?: () => void;
  label?: string;
  children: React.ReactNode;
  placeholder?: string;
  backgroundColor?: ColorValue;
}

const TextInputIcon: React.FC<Props> = ({
  value,
  onChangeText,
  onPress,
  label = 'Label',
  placeholder = 'placeholder',
  children,
  backgroundColor,
}) => {
  return (
    <View>
      <TypographyText text={label} {...mediumTypography} />
      <Margin margin={5} />
      <View style={styles.textInput}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={colors.gray2}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={onPress}
          style={[styles.iconContainer, {backgroundColor}]}>
          {children}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextInputIcon;

const styles = StyleSheet.create({
  textInput: {
    height: responsiveHeight(48),
    backgroundColor: colors.gray4,
    borderRadius: responsiveWidth(14),
    fontFamily: fontFamily.poppinsRegular,
    overflow: 'hidden',

    // SHADOW
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    width: '85%',
    paddingLeft: responsiveWidth(15),
    height: '100%',
  },
  iconContainer: {
    paddingRight: responsiveWidth(15),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: responsiveWidth(14),
    borderBottomRightRadius: responsiveWidth(14),
    width: '20%',
  },
});
