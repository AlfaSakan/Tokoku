export const sentenceCase = (value: string) => {
  if (!value) {
    return '';
  }

  value = value.toLowerCase();
  value = value[0].toUpperCase() + value.substring(1);

  return value;
};

export const titleCase = (value: string) => {
  return value
    .split(' ')
    .map(val => sentenceCase(val))
    .join(' ');
};
