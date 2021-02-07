import { format, parseISO } from 'date-fns';

export const toFahrenheit = (temp: number) => {
  return (9 / 5) * temp + 32;
};

export const formatDate = (date: string) => {
  let formatedDate;

  if (date) {
    formatedDate = parseISO(date);
  } else {
    formatedDate = Date.now();
  }

  return format(formatedDate, 'iii, d LLL');
};
