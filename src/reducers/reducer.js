import { API_SUCCESS } from "./actions/api";

export default (state = [], action) => {
  switch (action.type) {
    case API_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
