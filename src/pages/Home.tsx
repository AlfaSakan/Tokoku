import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {RootStackParamList} from '../../App';
import {colors} from '../assets/colors';
import {
  fontFamily,
  fontSize,
  largeTypography,
  lineHeight,
  smallTypography,
} from '../assets/fonts';
import {images} from '../assets/images';
import BaseContainer from '../components/atoms/BaseContainer';
import FlexContainer from '../components/atoms/FlexContainer';
import Margin from '../components/atoms/Margin';
import PaddingContainer from '../components/atoms/PaddingContainer';
import TypographyText from '../components/atoms/TypographyText';
import OrderItemCard from '../components/molecules/OrderItemCard';
import {useAppSelector} from '../config/redux/app/hooks';
import {historyTime} from '../utils/dateFormat';

import {responsiveWidth} from '../utils/responsiveUI';
import {sentenceCase} from '../utils/wordingString';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'BottomNavbarStackScreen'
>;

const Home = ({navigation}: Props) => {
  const {
    orderItem,
    user: {storeName},
  } = useAppSelector(state => state);

  const seeMoreOrder = () => {
    navigation.navigate('OrderItemList');
  };

  const sortOrder = useMemo(() => {
    return [...orderItem].sort((a, b) => {
      if (!a.createdAt || !b.createdAt) {
        return 0;
      }
      return b.createdAt - a.createdAt;
    });
  }, [orderItem]);

  return (
    <BaseContainer>
      <PaddingContainer>
        <FlexContainer justifyContent="flex-start">
          <Image
            source={images.store}
            resizeMode="contain"
            style={styles.img}
          />
          <View style={styles.marginLeft10}>
            <TypographyText
              text={`${storeName}`}
              fontFamily={fontFamily.poppinsBold}
              fontSize={fontSize.h4}
              lineHeight={lineHeight.h4}
            />
          </View>
        </FlexContainer>

        <Margin margin={30} />
        <FlexContainer>
          <TypographyText text="Keluar Masuk Barang" {...largeTypography} />
          <TouchableOpacity onPress={seeMoreOrder}>
            <TypographyText
              text="Lainnya"
              {...smallTypography}
              color={colors.gray2}
            />
          </TouchableOpacity>
        </FlexContainer>
        <Margin margin={15} />
        {sortOrder.map((order, index) => {
          if (index > 2) {
            return;
          }

          const date = historyTime(order.createdAt);

          return (
            <OrderItemCard
              key={index}
              title={sentenceCase(order.name)}
              colorTitle={
                order.type === 'tambah' ? colors.success : colors.lipstick
              }
              description={`${order.type} ${order.amount} ${
                order.units ?? ''
              } | ${date}`}
            />
          );
        })}
      </PaddingContainer>
    </BaseContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
  },
  marginLeft10: {
    marginLeft: responsiveWidth(10),
  },
});
