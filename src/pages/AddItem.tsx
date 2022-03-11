import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';

import BaseContainer from '../components/atoms/BaseContainer';
import TextInputCustom from '../components/atoms/TextInputCustom';
import PaddingContainer from '../components/atoms/PaddingContainer';
import Margin from '../components/atoms/Margin';
import Button from '../components/atoms/Button';

import {largeTypography} from '../assets/fonts';
import {colors} from '../assets/colors';

import {responsiveHeight} from '../utils/responsiveUI';

import {useAppDispatch} from '../config/redux/app/hooks';
import {addNewItem} from '../config/redux/features/item/itemSlice';
import Header from '../components/molecules/Header';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'BottomNavbarStackScreen'
>;

const AddItem = ({navigation}: Props) => {
  const [name, setName] = useState('');
  const [amounts, setAmounts] = useState(0);
  const [units, setUnits] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();

  const amountHandler = (value: string) => {
    if (isNaN(Number(value))) {
      return;
    }
    setAmounts(Number(value));
  };

  const onPressButton = async () => {
    try {
      if (!name || !amounts || !units) {
        return;
      }

      const newItem = {
        name: name.toLowerCase(),
        amounts,
        units: units.toLowerCase(),
        description,
      };

      dispatch(addNewItem(newItem));
      navigation.navigate('BottomNavbarStackScreen', {screen: 'Stock'});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BaseContainer>
      <Header
        isLeftButton={false}
        navigation={navigation}
        title="Masukkan Barang Baru"
      />
      <PaddingContainer>
        <TextInputCustom
          value={name}
          onChangeText={setName}
          label="Masukkan Nama Barang"
          placeholder="Nama Barang"
        />
        <Margin margin={15} />
        <TextInputCustom
          value={`${amounts}`}
          onChangeText={amountHandler}
          label="Masukkan Jumlah Stok"
        />
        <Margin margin={15} />
        <TextInputCustom
          value={units}
          onChangeText={setUnits}
          label="Masukkan Satuan Barang"
          placeholder="Satuan Barang"
        />
        <Margin margin={15} />
        <TextInputCustom
          value={description}
          onChangeText={setDescription}
          label="Masukkan Keterangan"
          placeholder="Keterangan"
        />
        <Margin margin={30} />
        <Button
          text="Masukkan"
          {...largeTypography}
          color={colors.white}
          height={responsiveHeight(50)}
          onPress={onPressButton}
        />
      </PaddingContainer>
    </BaseContainer>
  );
};

export default AddItem;
