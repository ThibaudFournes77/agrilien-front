export const LOAD_FARM = 'LOAD_FARM';
export const SAVE_FARM_REQUEST = 'SAVE_FARM_REQUEST';
export const SAVE_FARM_SUCCESS = 'SAVE_FARM_SUCCESS';
export const SAVE_FARM_FAIL = 'SAVE_FARM_FAIL';

export const loadFarm = (id) => ({
  type: LOAD_FARM,
  id,
});

export const saveFarmRequest = () => ({
  type: SAVE_FARM_REQUEST,
});

export const saveFarmSuccess = (farm) => ({
  type: SAVE_FARM_SUCCESS,
  farm,
});

export const saveFarmFail = (error) => ({
  type: SAVE_FARM_FAIL,
  error,
});
