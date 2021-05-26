export const LOAD_FARMS = 'LOAD_FARMS';
export const SAVE_FARMS = 'SAVE_FARMS';
export const START_LOADING_FARMS = 'START_LOADING_FARMS';
export const STOP_LOADING_FARMS = 'STOP_LOADING_FARMS';
export const INPUT_VALUE_CHANGE = 'INPUT_VALUE_CHANGE';
export const SWITCH_VALUE_CHANGE = 'SWITCH_VALUE_CHANGE';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const FARM_CREATION = 'FARM_CREATION';

export const loadFarms = () => ({
  type: LOAD_FARMS,
});

export const saveFarms = (farms) => ({
  type: SAVE_FARMS,
  farms,
});

export const startLoadingFarms = () => ({
  type: START_LOADING_FARMS,
});

export const stopLoadingFarms = () => ({
  type: STOP_LOADING_FARMS,
});

export const inputValueChange = (name, value) => ({
  type: INPUT_VALUE_CHANGE,
  name,
  value,
});

export const switchValueChange = (name) => ({
  type: SWITCH_VALUE_CHANGE,
  name,
});

export const uploadImage = (file) => ({
  type: UPLOAD_IMAGE,
  file,
});

export const createFarm = () => ({
  type: FARM_CREATION,
});
