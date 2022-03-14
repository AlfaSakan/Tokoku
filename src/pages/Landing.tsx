/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {colors} from '../assets/colors';
import {fontFamily, fontSize, lineHeight} from '../assets/fonts';
import BaseContainer from '../components/atoms/BaseContainer';
import TypographyText from '../components/atoms/TypographyText';
import {useAppDispatch} from '../config/redux/app/hooks';
import {addIncomesState} from '../config/redux/features/income/incomeSlice';
import {addItems} from '../config/redux/features/item/itemSlice';
import {addOrderItems} from '../config/redux/features/orderItem/orderItemSlice';
import {setUserState} from '../config/redux/features/user/userSlice';
import {getIncome} from '../services/income.service';
import {getItem} from '../services/item.service';
import {getOrderItem} from '../services/orderItem.service';
import {getUser} from '../services/user.service';
import {responsiveHeight} from '../utils/responsiveUI';

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

const Landing = ({navigation}: Props) => {
  const opacityAnimate = new Animated.Value(0);

  const dispatch = useAppDispatch();

  const startAnimationOpacity = () => {
    Animated.timing(opacityAnimate, {
      useNativeDriver: false,
      duration: 3000,
      toValue: 1,
    }).start(() => nextPage());
  };

  const nextPage = async () => {
    try {
      const user = await getUser();
      const items = await getItem();
      const orderItems = await getOrderItem();
      const incomes = await getIncome();

      if (!user) {
        throw user;
      }

      dispatch(setUserState(user));
      dispatch(addItems(items));
      dispatch(addOrderItems(orderItems));
      dispatch(addIncomesState(incomes));

      navigation.navigate('BottomNavbarStackScreen', {screen: 'HomeTab'});
    } catch (error) {
      console.log(error);
      navigation.navigate('SignUp');
    }
  };

  useEffect(() => {
    startAnimationOpacity();
    // nextPage();
  }, []);

  return (
    <BaseContainer>
      <View style={styles.container}>
        <Animated.View style={[styles.centerText, {opacity: opacityAnimate}]}>
          <TypographyText
            text="Tokoku"
            fontSize={36}
            lineHeight={54}
            fontFamily={fontFamily.poppinsBold}
          />
          <TypographyText
            text="Lorem ajfekj aefnlk"
            fontSize={fontSize.subtitle}
            lineHeight={lineHeight.subtitle}
            fontFamily={fontFamily.poppinsRegular}
            color={colors.gray1}
          />
        </Animated.View>
      </View>
    </BaseContainer>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(300),
  },
  centerText: {
    alignItems: 'center',
  },
});
