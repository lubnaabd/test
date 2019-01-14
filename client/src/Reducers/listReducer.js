import { GET_LIST, NEW_LIST } from '../Action/types';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST:
      return {
        ...state,
        items: payload,
      };
    case NEW_LIST:
      return {
        ...state,
        item: payload,
      };
    default:
      return state;
  }
}
