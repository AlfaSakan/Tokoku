import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {RootStackParamList} from '../../App';
import {colors} from '../assets/colors';
import {fontFamily, largeTypography} from '../assets/fonts';
import BaseContainer from '../components/atoms/BaseContainer';
import Button from '../components/atoms/Button';
import Margin from '../components/atoms/Margin';
import PaddingContainer from '../components/atoms/PaddingContainer';
import TextInputCustom from '../components/atoms/TextInputCustom';
import {useAppDispatch} from '../config/redux/app/hooks';
import {setUserState} from '../config/redux/features/user/userSlice';
import {setUser} from '../services/user.service';
import {responsiveHeight} from '../utils/responsiveUI';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({navigation}: Props) => {
  const [storeName, setStoreName] = useState('');

  const dispatch = useAppDispatch();

  const buttonText = {
    ...largeTypography,
    fontFamily: fontFamily.poppinsBold,
    color: colors.white,
  };

  const onRegister = async () => {
    try {
      dispatch(setUserState(storeName));
      await setUser(storeName);
      navigation.replace('BottomNavbarStackScreen', {screen: 'HomeTab'});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BaseContainer>
      <PaddingContainer>
        <TextInputCustom
          value={storeName}
          onChangeText={setStoreName}
          placeholder="Masukkan Nama Toko"
          label="Nama Toko"
        />
        <Margin margin={30} />
        <Button
          height={responsiveHeight(60)}
          onPress={onRegister}
          {...buttonText}
        />
      </PaddingContainer>
    </BaseContainer>
  );
};

export default SignUp;
