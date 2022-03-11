import AsyncStorageLib from '@react-native-async-storage/async-storage';

export const setUser = async (namaToko: string) => {
  await AsyncStorageLib.setItem('user', namaToko);
};

export const getUser = async () => {
  return await AsyncStorageLib.getItem('user');
};
