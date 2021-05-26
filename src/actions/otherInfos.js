export const LOAD_OTHER_INFOS = 'LOAD_OTHER_INFOS';
export const SAVE_OTHER_INFOS_REQUEST = 'SAVE_OTHER_INFOS_REQUEST';
export const SAVE_OTHER_INFOS_SUCCESS = 'SAVE_OTHER_INFOS_SUCCESS';
export const SAVE_OTHER_INFOS_FAIL = 'SAVE_OTHER_INFOS_FAIL';

export const loadOtherInfos = () => ({
  type: LOAD_OTHER_INFOS,
});

export const saveOtherInfosRequest = () => ({
  type: SAVE_OTHER_INFOS_REQUEST,
});

export const saveOtherInfosSuccess = (otherInfos, labels) => ({
  type: SAVE_OTHER_INFOS_SUCCESS,
  otherInfos,
  labels,
});

export const saveOtherInfosFail = (message) => ({
  type: SAVE_OTHER_INFOS_FAIL,
  message,
});
