import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
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
import {addNewIncomeState} from '../config/redux/features/income/incomeSlice';
import {formatCurrency, removeDot} from '../utils/formatCurrency';
import {formatCalendar, months, timeToMonth} from '../utils/dateFormat';
import FlexContainer from '../components/atoms/FlexContainer';
import Dropdown from '../components/molecules/Dropdown';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'BottomNavbarStackScreen'
>;

const pickMonths = ['All', ...months];

const Income = ({navigation}: Props) => {
  const [input, setInput] = useState('0');
  const [description, setDescription] = useState('');
  const [isDrop, setIsDrop] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(pickMonths[0]);

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
    const newIncome = {
      amount: Number(input),
      description,
    };
    dispatch(addNewIncomeState(newIncome));
    formatCurrency(`${input}`);
  };

  const dropdownHandler = () => {
    setIsDrop(!isDrop);
  };

  const filterMonthHandler = (value: string) => {
    setSelectedMonth(value);
    dropdownHandler();
  };

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
        <Button
          height={responsiveHeight(50)}
          {...largeTypography}
          color={colors.white}
          onPress={addIncomeHandler}
        />
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
              selectedMonth !== 'All'
            ) {
              return;
            }

            const date = formatCalendar(income.createdAt);

            return (
              <OrderItemCard
                key={income.id}
                title={`Rp ${formatCurrency(`${income.amount}`)}`}
                description={`${date}\n${income.description}`}
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
