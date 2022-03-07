import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {colors} from '../assets/colors';
import {fontFamily, largeTypography} from '../assets/fonts';
import BaseContainer from '../components/atoms/BaseContainer';
import Button from '../components/atoms/Button';
import Margin from '../components/atoms/Margin';
import PaddingContainer from '../components/atoms/PaddingContainer';
import TextInputCustom from '../components/atoms/TextInputCustom';
// import TypographyText from '../components/atoms/TypographyText';
import {responsiveHeight} from '../utils/responsiveUI';

const SignUp = () => {
  const [storeName, setStoreName] = useState('');

  const buttonText = {
    ...largeTypography,
    fontFamily: fontFamily.poppinsBold,
    color: colors.white,
  };

  const onRegister = () => {
    AsyncStorageLib.setItem('storeName', storeName);
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
          underlayColor={colors.blue2}
          {...buttonText}
        />
      </PaddingContainer>
    </BaseContainer>
  );
};

export default SignUp;
