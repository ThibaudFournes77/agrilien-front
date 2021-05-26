export const MAIN_PROD_CHANGE = 'MAIN_PROD_CHANGE';
export const BIO_CHANGE = 'BIO_CHANGE';
export const SEARCH = 'SEARCH';
export const INPUT_VALUE_CHANGE = 'INPUT_VALUE_CHANGE';
export const DATE_ARRIVAL_CHANGE = 'DATE_ARRIVAL_CHANGE';
export const DATE_DEPARTURE_CHANGE = 'DATE_DEPARTURE_CHANGE';

export const mainProdChange = (mainProd, value) => ({
  type: MAIN_PROD_CHANGE,
  mainProd,
  value,
});

export const bioChange = (name) => ({
  type: BIO_CHANGE,
  name,
});

export const search = (name) => ({
  type: SEARCH,
  name,
});

export const inputValueChange = (name, value) => ({
  type: INPUT_VALUE_CHANGE,
  name,
  value,
});

export const dateArrivalChange = (value) => ({
  type: DATE_ARRIVAL_CHANGE,
  value,
});

export const dateDepartureChange = (value) => ({
  type: DATE_DEPARTURE_CHANGE,
  value,
});
