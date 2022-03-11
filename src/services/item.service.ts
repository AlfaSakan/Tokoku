import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {ItemDocument, OrderItemDocument} from '../types/itemType';

const storageName = 'item';

export const postItems = async (input: ItemDocument[]) => {
  const inputString = JSON.stringify(input);

  await AsyncStorageLib.setItem(storageName, inputString);
};

export const postItem = async (input: ItemDocument) => {
  let items = await getItem();

  if (!items) {
    items = [];
  }

  items.push(input);

  const inputString = JSON.stringify(items);

  await AsyncStorageLib.setItem(storageName, inputString);
};

export const getItem = async () => {
  const itemStorage = await AsyncStorageLib.getItem(storageName);

  if (!itemStorage) {
    return [];
  }

  const items = JSON.parse(itemStorage) as ItemDocument[];

  return items;
};

export const removeItem = async (item: ItemDocument) => {
  const items = await getItem();
  if (!items) {
    return false;
  }
  const itemsFiltered = items.filter(itm => itm.id !== item.id);

  await postItems(itemsFiltered);

  return true;
};

export const updateAmountItem = async (orderItem: OrderItemDocument) => {
  const items = await getItem();

  items.forEach((itm, index) => {
    if (itm.id === orderItem.itemId) {
      if (orderItem.type === 'kurang') {
        items[index].amounts = itm.amounts - orderItem.amount;
      } else {
        items[index].amounts = itm.amounts + orderItem.amount;
      }
    }
  });

  await postItems(items);
};
