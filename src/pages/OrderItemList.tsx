import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {RootStackParamList} from '../../App';
import {colors} from '../assets/colors';
import BaseContainer from '../components/atoms/BaseContainer';
import Margin from '../components/atoms/Margin';
import PaddingContainer from '../components/atoms/PaddingContainer';
import Header from '../components/molecules/Header';
import OrderItemCard from '../components/molecules/OrderItemCard';
import {useAppSelector} from '../config/redux/app/hooks';
import {diplayDate} from '../utils/dateFormat';
import {sentenceCase} from '../utils/wordingString';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderItemList'>;

const OrderItemList = ({navigation}: Props) => {
  const {orderItem} = useAppSelector(state => state);

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
      <Header navigation={navigation} title="Keluar Masuk Barang" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PaddingContainer paddingVertical={30}>
          {sortOrder.map((order, index) => {
            const date = diplayDate(order.createdAt);

            return (
              <OrderItemCard
                key={index}
                title={sentenceCase(order.name)}
                colorTitle={
                  order.type === 'tambah' ? colors.success : colors.lipstick
                }
                description={`${order.type ?? ''} ${order.amount} ${
                  order.units ?? ''
                } | ${date}`}
                onPress={() => {}}
              />
            );
          })}
          <Margin margin={60} />
        </PaddingContainer>
      </ScrollView>
    </BaseContainer>
  );
};

export default OrderItemList;
