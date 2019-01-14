import { GET_LIST } from '../Action/types';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
}
