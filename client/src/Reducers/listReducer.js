import { GET_LIST, NEW_LIST, DELETE_LIST } from '../Action/types';

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

    case DELETE_LIST:
      return {
        ...state,
        items: state.items.filter(({ _id }) => _id !== payload),
      };
    default:
      return state;
  }
}
