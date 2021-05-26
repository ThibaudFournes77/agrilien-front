export const LOAD_MAIN_PRODUCTIONS = 'LOAD_MAIN_PRODUCTIONS';
export const SAVE_MAIN_PRODUCTIONS_REQUEST = 'SAVE_MAIN_PRODUCTIONS_REQUEST';
export const SAVE_MAIN_PRODUCTIONS_SUCCESS = 'SAVE_MAIN_PRODUCTIONS_SUCCESS';
export const SAVE_MAIN_PRODUCTIONS_FAIL = 'SAVE_MAIN_PRODUCTIONS_FAIL';

export const loadMainProductions = () => ({
  type: LOAD_MAIN_PRODUCTIONS,
});

export const saveMainProductionsRequest = () => ({
  type: SAVE_MAIN_PRODUCTIONS_REQUEST,
});

export const saveMainProductionsSuccess = (productions) => ({
  type: SAVE_MAIN_PRODUCTIONS_SUCCESS,
  productions,
});

export const saveMainProductionsFail = (message) => ({
  type: SAVE_MAIN_PRODUCTIONS_FAIL,
  message,
});
