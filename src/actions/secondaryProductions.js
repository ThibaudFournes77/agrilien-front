export const LOAD_SECONDARY_PRODUCTIONS = 'LOAD_SECONDARY_PRODUCTIONS';
export const SAVE_SECONDARY_PRODUCTIONS_REQUEST = 'SAVE_SECONDARY_PRODUCTIONS_REQUEST';
export const SAVE_SECONDARY_PRODUCTIONS_SUCCESS = 'SAVE_SECONDARY_PRODUCTIONS_SUCCESS';
export const SAVE_SECONDARY_PRODUCTIONS_FAIL = 'SAVE_SECONDARY_PRODUCTIONS_FAIL';

export const loadSecondaryProductions = () => ({
  type: LOAD_SECONDARY_PRODUCTIONS,
});

export const saveSecondaryProductionsRequest = () => ({
  type: SAVE_SECONDARY_PRODUCTIONS_REQUEST,
});

export const saveSecondaryProductionsSuccess = (secondaryProductions, labels) => ({
  type: SAVE_SECONDARY_PRODUCTIONS_SUCCESS,
  secondaryProductions,
  labels,
});

export const saveSecondaryProductionsFail = (message) => ({
  type: SAVE_SECONDARY_PRODUCTIONS_FAIL,
  message,
});
