import axios from 'axios';
import { GET_LIST, NEW_LIST, DELETE_LIST } from './types';

export const getList = () => (dispatch) => {
  axios
    .get('/get-Item')
    .then(data => dispatch({
      type: GET_LIST,
      payload: data.data,
    }))
    .catch((error) => {
      console.log(error.message);
    });
};


export const addNewItem = data => (dispatch) => {
  axios.post('/post-Item', data).then(result => dispatch({
    type: NEW_LIST,
    payload: result.data,
  }));
};

export const deleteItem = data => (dispatch) => {
  const { id } = data;
  axios.delete(`/delete-Item/${id}`).then(() => dispatch({
    type: DELETE_LIST,
    payload: id,
  })).catch(err => console.log(err));
};
