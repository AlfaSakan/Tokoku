import React from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../assets/colors';
import {fontFamily, mediumTypography} from '../../assets/fonts';
import {responsiveWidth} from '../../utils/responsiveUI';
import Margin from './Margin';
import TypographyText from './TypographyText';

interface Props {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const TextInputCustom: React.FC<Props> = ({
  label = 'label',
  placeholder = 'placeholder',
  value,
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View>
      <TypographyText text={label} {...mediumTypography} />
      <Margin margin={5} />
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor={colors.gray2}
        autoCorrect={false}
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  textInput: {
    padding: responsiveWidth(15),
    backgroundColor: colors.gray4,
    borderRadius: responsiveWidth(14),
    fontFamily: fontFamily.poppinsRegular,

    // SHADOW
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
