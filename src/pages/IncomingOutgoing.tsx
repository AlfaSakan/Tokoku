import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {RootStackParamList} from '../../App';
import {colors} from '../assets/colors';
import {largeTypography} from '../assets/fonts';
import {ArrowDownIcon, ArrowLeftIcon} from '../assets/images/svg';
import BaseContainer from '../components/atoms/BaseContainer';
import Button from '../components/atoms/Button';
import Margin from '../components/atoms/Margin';
import PaddingContainer from '../components/atoms/PaddingContainer';
import TextInputCustom from '../components/atoms/TextInputCustom';
import Header from '../components/molecules/Header';
import TextInputIcon from '../components/molecules/TextInputIcon';
import {useAppDispatch} from '../config/redux/app/hooks';
import {
  addAmount,
  subtractAmount,
} from '../config/redux/features/item/itemSlice';
import {addOrderItem} from '../config/redux/features/orderItem/orderItemSlice';
import {responsiveHeight} from '../utils/responsiveUI';
import {titleCase} from '../utils/wordingString';

type Props = NativeStackScreenProps<RootStackParamList, 'IncomingOutgoing'>;

const IncomingOutgoing = ({navigation, route}: Props) => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [isIn, setIsIn] = useState(true);

  const {id, name} = route.params;

  const dispatch = useAppDispatch();

  const amountHandler = (value: string) => {
    if (isNaN(Number(value))) {
      return;
    }
    setAmount(Number(value));
  };

  const onPressButton = () => {
    if (!amount) {
      return;
    }

    const newItem = {
      itemId: id,
      name,
      amount,
      description,
    };

    dispatch(addOrderItem(newItem));

    if (isIn) {
      dispatch(addAmount(newItem));
    } else {
      dispatch(subtractAmount(newItem));
    }

    navigation.navigate('Stock');
  };

  const onPressIcon = () => {
    setIsIn(!isIn);
  };

  return (
    <BaseContainer>
      <Header navigation={navigation} title={`Tambahkan ${titleCase(name)}`} />
      <PaddingContainer>
        <TextInputIcon
          value={`${amount}`}
          onChangeText={amountHandler}
          label="Masukkan Jumlah Stok"
          placeholder="Jumlah Barang"
          backgroundColor={isIn ? colors.success : colors.danger}
          onPress={onPressIcon}>
          {isIn ? (
            <ArrowDownIcon colorIcon={colors.white} />
          ) : (
            <ArrowLeftIcon colorIcon={colors.white} />
          )}
        </TextInputIcon>

        <Margin margin={15} />
        <TextInputCustom
          value={description}
          onChangeText={setDescription}
          label="Keterangan"
          placeholder="Keterangan Barang"
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

export default IncomingOutgoing;
