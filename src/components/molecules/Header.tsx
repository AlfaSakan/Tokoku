import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {fontFamily, fontSize, lineHeight} from '../../assets/fonts';
import {ArrowLeft2Icon} from '../../assets/images/svg';
import {responsiveWidth} from '../../utils/responsiveUI';
import Dot from '../atoms/Dot';
import FlexContainer from '../atoms/FlexContainer';
import Margin from '../atoms/Margin';
import TypographyText from '../atoms/TypographyText';

interface Props {
  onPressLeft?: () => void;
  onPressRight?: () => void;
  navigation?: NativeStackNavigationProp<ParamListBase, string>;
  title?: string;
}

const Header: React.FC<Props> = ({
  onPressRight,
  onPressLeft,
  title = 'Header',
  navigation,
}) => {
  const onBack = () => {
    if (onPressLeft) {
      onPressLeft();
      return;
    }

    navigation?.goBack();
  };

  return (
    <View style={styles.container}>
      <FlexContainer>
        <TouchableOpacity onPress={onBack}>
          <View style={styles.option}>
            <ArrowLeft2Icon />
          </View>
        </TouchableOpacity>
        <TypographyText
          text={title}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
          fontFamily={fontFamily.poppinsBold}
        />
        <TouchableOpacity onPress={onPressRight}>
          <View style={styles.option}>
            <Dot marginRight={2} />
            <Dot />
          </View>
        </TouchableOpacity>
      </FlexContainer>
      <Margin margin={15} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(30),
    backgroundColor: colors.white,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray4,
    borderRadius: responsiveWidth(8),
    width: responsiveWidth(32),
    height: responsiveWidth(32),
  },
});
