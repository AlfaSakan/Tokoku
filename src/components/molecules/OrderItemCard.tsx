import React, {memo} from 'react';
import {
  ColorValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../assets/colors';
import {mediumTypography, smallTypography} from '../../assets/fonts';
import {images} from '../../assets/images';
import {ArrowRight2Icon} from '../../assets/images/svg';
import {responsiveWidth} from '../../utils/responsiveUI';
import FlexContainer from '../atoms/FlexContainer';
import Margin from '../atoms/Margin';
import TypographyText from '../atoms/TypographyText';

interface Props {
  description: string;
  title: string;
  colorTitle?: ColorValue;
  img?: ImageSourcePropType;
  iconRight?: React.ReactNode;
  onPress?: () => void;
}

const OrderItemCard: React.FC<Props> = ({
  title,
  description,
  iconRight = <ArrowRight2Icon />,
  img = images.rice,
  colorTitle,
  onPress,
}) => {
  return (
    <View>
      <View style={styles.card}>
        <FlexContainer>
          <FlexContainer>
            <View style={styles.iconContainer}>
              <Image source={img} style={styles.icon} resizeMode="contain" />
            </View>
            <View style={styles.marginLeft10}>
              <TypographyText
                text={title}
                {...mediumTypography}
                color={colorTitle}
              />
              <TypographyText
                text={description}
                color={colors.gray1}
                {...smallTypography}
              />
            </View>
          </FlexContainer>
          <TouchableOpacity onPress={onPress}>{iconRight}</TouchableOpacity>
        </FlexContainer>
      </View>
      <Margin margin={10} />
    </View>
  );
};

export default memo(OrderItemCard);

const styles = StyleSheet.create({
  img: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
  },
  marginLeft10: {
    marginLeft: responsiveWidth(10),
  },
  iconContainer: {
    width: responsiveWidth(50),
    height: responsiveWidth(50),
    borderRadius: responsiveWidth(25),
    overflow: 'hidden',
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: responsiveWidth(35),
    height: responsiveWidth(35),
  },
  card: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
