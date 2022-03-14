import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {colors} from '../assets/colors';
import {largeTypography, mediumTypography} from '../assets/fonts';
import {images} from '../assets/images';
import {ArrowRight2Icon} from '../assets/images/svg';
import BaseContainer from '../components/atoms/BaseContainer';
import FlexContainer from '../components/atoms/FlexContainer';
import Margin from '../components/atoms/Margin';
import PaddingContainer from '../components/atoms/PaddingContainer';
import TypographyText from '../components/atoms/TypographyText';
import Header from '../components/molecules/Header';
import {exportFileExcel} from '../config/convertExcel/convertToXlsx';
import {useAppSelector} from '../config/redux/app/hooks';
import {formatCalendar, formatTime} from '../utils/dateFormat';
import {responsiveWidth} from '../utils/responsiveUI';

const convertItems = [
  {
    name: 'Semua',
    img: images.rice,
  },
  {
    name: 'Stok Barang',
    img: images.rice,
  },
  {
    name: 'Keluar Masuk Barang',
    img: images.sugar,
  },
  {
    name: 'Pendapatan',
    img: images.profits,
  },
];

type Props = NativeStackScreenProps<
  RootStackParamList,
  'BottomNavbarStackScreen'
>;

const Profile = ({navigation}: Props) => {
  const {items, orderItem, incomesState} = useAppSelector(state => state);

  const convertExcelHandler = (name: string) => {
    let data: object[];

    if (name === 'Keluar Masuk Barang') {
      data = orderItem.map(order => {
        const date = `${formatTime(order.createdAt)} ${formatCalendar(
          order.createdAt,
        )}`;

        return {...order, createdAt: date};
      });

      exportFileExcel(data, name);
      return;
    }

    if (name === 'Stok Barang') {
      data = items.map(item => {
        const dateCreatedAt = `${formatTime(item.createdAt)} ${formatCalendar(
          item.createdAt,
        )}`;
        const dateUpdatedAt = `${formatTime(item.updatedAt)} ${formatCalendar(
          item.updatedAt,
        )}`;

        return {...item, createdAt: dateCreatedAt, updatedAt: dateUpdatedAt};
      });

      exportFileExcel(data, name);
      return;
    }

    if (name === 'Pendapatan') {
      data = incomesState.map(income => {
        const dateCreatedAt = `${formatTime(income.createdAt)} ${formatCalendar(
          income.createdAt,
        )}`;
        const dateUpdatedAt = `${formatTime(income.updatedAt)} ${formatCalendar(
          income.updatedAt,
        )}`;

        return {...income, createdAt: dateCreatedAt, updatedAt: dateUpdatedAt};
      });

      exportFileExcel(data, name);
      return;
    }
  };

  return (
    <BaseContainer>
      <Header title="Profile Toko" navigation={navigation} />
      <PaddingContainer>
        <View style={styles.card}>
          <TypographyText text="Konversi Data ke Excel" {...largeTypography} />

          <Margin margin={15} />

          {convertItems.map((convert, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => convertExcelHandler(convert.name)}>
                <FlexContainer>
                  <FlexContainer>
                    <Image
                      source={convert.img}
                      style={{...styles.icon, ...styles.marginRight10}}
                      resizeMode="contain"
                    />
                    <TypographyText text={convert.name} {...mediumTypography} />
                  </FlexContainer>
                  <ArrowRight2Icon />
                </FlexContainer>
              </TouchableOpacity>
              {convertItems.length !== index + 1 && <Margin />}
            </View>
          ))}
        </View>
      </PaddingContainer>
    </BaseContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(16),
    padding: responsiveWidth(20),

    // SHADOW IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // SHADOW ANDROID
    elevation: 5,
  },

  icon: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
  },
  marginRight10: {
    marginRight: responsiveWidth(10),
  },
});
