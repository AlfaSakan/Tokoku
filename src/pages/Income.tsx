import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {colors} from '../assets/colors';
import {largeTypography, smallTypography} from '../assets/fonts';
import BaseContainer from '../components/atoms/BaseContainer';
import Button from '../components/atoms/Button';
import Margin from '../components/atoms/Margin';
import PaddingContainer from '../components/atoms/PaddingContainer';
import TextInputCustom from '../components/atoms/TextInputCustom';
import TypographyText from '../components/atoms/TypographyText';
import Header from '../components/molecules/Header';
import OrderItemCard from '../components/molecules/OrderItemCard';
import {useAppDispatch, useAppSelector} from '../config/redux/app/hooks';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';
import {
  addNewIncomeState,
  removeIncomeState,
  updateIncomeState,
} from '../config/redux/features/income/incomeSlice';
import {formatCurrency, removeDot} from '../utils/formatCurrency';
import {formatCalendar, months, timeToMonth} from '../utils/dateFormat';
import FlexContainer from '../components/atoms/FlexContainer';
import Dropdown from '../components/molecules/Dropdown';
import {IncomeDocument} from '../types/incomeType';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'BottomNavbarStackScreen'
>;

const pickMonths = ['Semua', ...months];

const Income = ({navigation}: Props) => {
  const [input, setInput] = useState('0');
  const [description, setDescription] = useState('');
  const [isDrop, setIsDrop] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(pickMonths[0]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedValue, setSelectedValue] = useState<IncomeDocument>({
    amount: 0,
    description: '',
    createdAt: 0,
    updatedAt: 0,
  });

  const {incomesState} = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const inputHandler = (value: string) => {
    value = value.replace('Rp ', '');
    value = removeDot(value);
    const number = Number(value);
    if (isNaN(number)) {
      return;
    }
    setInput(`${number}`);
  };

  const addIncomeHandler = async () => {
    try {
      if (!Number(input)) {
        return;
      }

      const newIncome = {
        amount: Number(input),
        description,
        createdAt: 0,
        updatedAt: 0,
      };

      dispatch(addNewIncomeState(newIncome));

      setInput('0');
      setDescription('');
    } catch (error) {
      console.log(error);
    }
  };

  const dropdownHandler = () => {
    setIsDrop(!isDrop);
  };

  const filterMonthHandler = (value: string) => {
    setSelectedMonth(value);
    dropdownHandler();
  };

  const cardHandler = (selectedCard: IncomeDocument) => {
    setInput(`${selectedCard.amount}`);
    setDescription(selectedCard.description);
    setSelectedValue(selectedCard);
    setIsEdit(true);
  };

  const editHandler = async () => {
    try {
      if (!Number(input)) {
        return;
      }

      dispatch(updateIncomeState(selectedValue));
    } catch (error) {
      console.log(error);
    }
  };

  const removeHandler = async () => {
    try {
      dispatch(removeIncomeState(selectedValue));
      newHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const newHandler = () => {
    setInput('0');
    setDescription('');
    setSelectedValue({amount: 0, description: '', createdAt: 0, updatedAt: 0});
    setIsEdit(false);
  };

  useEffect(() => {
    setSelectedValue(prev => ({...prev, amount: Number(input), description}));
  }, [input, description]);

  return (
    <BaseContainer>
      <Header navigation={navigation} title="Pendapatan Toko" />
      <PaddingContainer>
        <TextInputCustom
          value={`Rp ${formatCurrency(input)}`}
          onChangeText={inputHandler}
          label="Pendapatan hari ini"
          keyboardType="number-pad"
        />
        <Margin margin={15} />
        <TextInputCustom
          value={description}
          onChangeText={setDescription}
          label="Keterangan"
          placeholder="Masukkan Keterangan"
        />

        <Margin margin={30} />
        {isEdit ? (
          <FlexContainer>
            <Button
              text="Baru"
              {...largeTypography}
              height={responsiveHeight(50)}
              width="30%"
              backgroundColor={colors.success}
              color={colors.white}
              onPress={newHandler}
            />
            <Button
              text="Ubah"
              {...largeTypography}
              height={responsiveHeight(50)}
              width="30%"
              backgroundColor={colors.warning}
              color={colors.white}
              onPress={editHandler}
            />
            <Button
              text="Hapus"
              {...largeTypography}
              height={responsiveHeight(50)}
              width="30%"
              backgroundColor={colors.lipstick}
              color={colors.white}
              onPress={removeHandler}
            />
          </FlexContainer>
        ) : (
          <Button
            height={responsiveHeight(50)}
            {...largeTypography}
            color={colors.white}
            onPress={addIncomeHandler}
            text="Penghasilan Baru"
          />
        )}
      </PaddingContainer>
      <Margin margin={30} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PaddingContainer>
          <FlexContainer>
            <TypographyText text="Riwayat Pendapatan" {...largeTypography} />
            <View>
              <Button
                text={selectedMonth}
                width={responsiveWidth(75)}
                height={responsiveHeight(28)}
                color={colors.white}
                onPress={dropdownHandler}
                {...smallTypography}
              />
              {isDrop && (
                <Dropdown top={responsiveHeight(30)} right={responsiveWidth(0)}>
                  {pickMonths.map((month, index) => (
                    <View key={index}>
                      <TouchableOpacity
                        onPress={() => filterMonthHandler(month)}>
                        <TypographyText text={month} {...smallTypography} />
                      </TouchableOpacity>
                    </View>
                  ))}
                </Dropdown>
              )}
            </View>
          </FlexContainer>
          <Margin margin={15} />
          {incomesState.map(income => {
            if (!income.createdAt) {
              return;
            }

            if (
              timeToMonth(income.createdAt) !== selectedMonth &&
              selectedMonth !== pickMonths[0]
            ) {
              return;
            }

            const date = formatCalendar(income.createdAt);

            return (
              <OrderItemCard
                key={income.id}
                title={`Rp ${formatCurrency(`${income.amount}`)}`}
                description={`${date}\n${income.description}`}
                onPress={() => cardHandler(income)}
              />
            );
          })}
          <Margin margin={200} />
        </PaddingContainer>
      </ScrollView>
    </BaseContainer>
  );
};

export default Income;
