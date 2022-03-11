import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {OrderItemDocument} from '../types/itemType';

export const postOrderItems = async (input: OrderItemDocument[]) => {
  const inputString = JSON.stringify(input);
  await AsyncStorageLib.setItem('orderItem', inputString);
};

export const postOrderItem = async (input: OrderItemDocument) => {
  let orderItems = await getOrderItem();

  if (!orderItems) {
    orderItems = [];
  }

  orderItems.push(input);
  const inputString = JSON.stringify(orderItems);
  await AsyncStorageLib.setItem('orderItem', inputString);
};

export const getOrderItem = async () => {
  const orderItemStorage = await AsyncStorageLib.getItem('orderItem');

  if (!orderItemStorage) {
    return [];
  }

  const orderItems = JSON.parse(orderItemStorage) as OrderItemDocument[];
  return orderItems;
};

export const deleteOrderItem = async (valueRemove: OrderItemDocument) => {
  const orderItems = await getOrderItem();

  const orderItemsRemoved = orderItems.filter(orderItem => {
    orderItem.id !== valueRemove.id;
  });

  await postOrderItems(orderItemsRemoved);
};
