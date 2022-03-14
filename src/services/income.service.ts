import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {IncomeDocument} from '../types/incomeType';

const storageName = 'incomes';

export const postIncomes = async (input: IncomeDocument[]) => {
  const inputString = JSON.stringify(input);

  await AsyncStorageLib.setItem(storageName, inputString);
};

export const postIncome = async (input: IncomeDocument) => {
  let incomes = await getIncome();

  incomes.push(input);

  const inputString = JSON.stringify(incomes);

  await AsyncStorageLib.setItem(storageName, inputString);
};

export const getIncome = async () => {
  const incomeStorage = await AsyncStorageLib.getItem(storageName);

  if (!incomeStorage) {
    return [];
  }

  const items = JSON.parse(incomeStorage) as IncomeDocument[];

  return items;
};

export const removeIncome = async (item: IncomeDocument) => {
  const incomes = await getIncome();

  if (!incomes) {
    return false;
  }

  const itemsFiltered = incomes.filter(itm => itm.id !== item.id);

  await postIncomes(itemsFiltered);

  return true;
};

export const updateIncome = async (input: IncomeDocument) => {
  const items = await getIncome();

  items.forEach((itm, index) => {
    if (itm.id === input.id) {
      items[index] = {...itm, ...input};
    }
  });

  await postIncomes(items);
};
