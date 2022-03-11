export const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const timeToDay = (value: number) => {
  const date = new Date(value);
  return days[date.getDay()];
};

export const timeToDate = (value: number) => new Date(value).getDate();

export const timeToMonth = (value: number) =>
  months[new Date(value).getMonth()];

export const timeToYear = (value: number) => new Date(value).getFullYear();

export const getHours = (value: number) => new Date(value).getHours();

export const getMinutes = (value: number) => new Date(value).getMinutes();

export const untilNowInMinutes = (value?: number) => {
  if (!value) {
    return '';
  }

  const subtrictTime = new Date(new Date().getTime() - value);
  return `${subtrictTime.getMinutes()} menit yang lalu`;
};

export const untilNowInHours = (value?: number) => {
  if (!value) {
    return '';
  }

  const subtrictTime = new Date(new Date().getTime() - value);
  return `${subtrictTime.getHours()} jam yang lalu`;
};

export const untilNowInDays = (value?: number) => {
  if (!value) {
    return '';
  }

  const subtrictTime = new Date(new Date().getTime() - value);
  return `${subtrictTime.getDate()} hari yang lalu`;
};

export const historyTime = (value?: number) => {
  if (!value) {
    return '';
  }

  const miliSecond = new Date().getTime() - value;

  if (miliSecond > 86400000) {
    return untilNowInDays(value);
  }

  if (miliSecond > 3600000) {
    return untilNowInHours(value);
  }

  return untilNowInMinutes(value);
};

export const formatTime = (value: number) => {
  return `${getHours(value)}:${getMinutes(value)}`;
};

export const formatCalendar = (value: number) => {
  return `${timeToDate(value)} ${timeToMonth(value)} ${timeToYear(value)}`;
};

export const diplayDate = (value?: number) => {
  if (!value) {
    return '';
  }
  const miliSecond = new Date().getTime() - value;

  if (miliSecond > 86400000) {
    return formatCalendar(value);
  }

  return formatTime(value);
};
