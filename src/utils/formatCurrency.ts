export const formatCurrency = (value: string) => {
  const arr = value.split('').reverse();

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if ((i + 1) % 3 === 0 && arr[i + 1]) {
      newArr.push('.');
    }
  }

  return newArr.reverse().join('');
};

export const removeDot = (value: string) => {
  while (value.includes('.')) {
    value = value.replace('.', '');
  }
  return value;
};
