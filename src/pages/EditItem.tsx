/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {RootStackParamList} from '../../App';
import {colors} from '../assets/colors';
import {largeTypography} from '../assets/fonts';
import BaseContainer from '../components/atoms/BaseContainer';
import Button from '../components/atoms/Button';
import Margin from '../components/atoms/Margin';
import PaddingContainer from '../components/atoms/PaddingContainer';
import TextInputCustom from '../components/atoms/TextInputCustom';
import Header from '../components/molecules/Header';
import {useAppDispatch} from '../config/redux/app/hooks';
import {updateItem} from '../config/redux/features/item/itemSlice';
import {responsiveHeight} from '../utils/responsiveUI';

type Props = NativeStackScreenProps<RootStackParamList, 'EditItem'>;

const EditItem = ({navigation, route}: Props) => {
  const [name, setName] = useState('');
  const [units, setUnits] = useState('');
  const [amounts, setAmounts] = useState(0);
  const [description, setDescription] = useState('');

  const itemRoute = route.params;

  const dispatch = useAppDispatch();

  const onPressButton = () => {
    if (!name || !units) {
      return;
    }

    const updatedItem = {
      name: name.toLowerCase(),
      amounts,
      units: units.toLowerCase(),
      description,
      id: itemRoute.id,
    };

    dispatch(updateItem(updatedItem));
    navigation.navigate('Stock');
  };

  useEffect(() => {
    setName(itemRoute.name);
    setUnits(itemRoute.units);
    setDescription(itemRoute.description);
    setAmounts(itemRoute.amounts);
  }, []);

  return (
    <BaseContainer>
      <Header navigation={navigation} title="Masukkan Barang Baru" />
      <PaddingContainer>
        <TextInputCustom
          value={name}
          onChangeText={setName}
          label="Masukkan Nama Barang"
          placeholder="Nama Barang"
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
          underlayColor={colors.gray4}
        />
      </PaddingContainer>
    </BaseContainer>
  );
};

export default EditItem;
