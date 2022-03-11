import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../../assets/colors';
import {
  fontFamily,
  fontSize,
  largeTypography,
  lineHeight,
} from '../../assets/fonts';
import {images} from '../../assets/images';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveUI';
import Button from '../atoms/Button';
import FlexContainer from '../atoms/FlexContainer';
import Margin from '../atoms/Margin';
import TypographyText from '../atoms/TypographyText';

interface Props {
  visible: boolean;
  img?: ImageSourcePropType;
  onPressNo?: () => void;
  onPressYes?: () => void;
}

const PopupTwoButton: React.FC<Props> = ({
  visible = true,
  img = images.trash,
  onPressNo,
  onPressYes,
}) => {
  const buttonStyle = {
    width: responsiveWidth(110),
    height: responsiveHeight(45),
    color: colors.white,
    backgroundColor: colors.lipstick,
    ...largeTypography,
  };

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.containerModal}>
        <View style={styles.contentContainer}>
          <Image source={img} />
          <Margin margin={15} />
          <TypographyText
            textAlign="center"
            text="Apakah kamu yakin akan menghapus ini?"
            fontFamily={fontFamily.poppinsBold}
            fontSize={fontSize.subtitle}
            lineHeight={lineHeight.subtitle}
          />
          <Margin margin={30} />
          <FlexContainer>
            <Button text="Yes" {...buttonStyle} onPress={onPressYes} />
            <View style={styles.marginLeft}>
              <Button text="No" {...buttonStyle} onPress={onPressNo} />
            </View>
          </FlexContainer>
        </View>
      </View>
    </Modal>
  );
};

export default PopupTwoButton;

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
  contentContainer: {
    backgroundColor: colors.white,
    flex: 1,
    marginHorizontal: responsiveWidth(30),
    marginVertical: responsiveHeight(180),
    borderRadius: responsiveWidth(15),
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(20),
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: responsiveWidth(10),
  },
});
