const getItem = require('../database/queries/getList');
const addItem = require('../database/queries/addList.js');
const deleteItem = require('../database/queries/deleteItem');

exports.get = async (request, response) => {
  try {
    const result = await getItem();
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send('Server Error');
  }
};

exports.post = async (request, response) => {
  try {
    const result = await addItem(request.body);
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send('Server Error');
  }
};

exports.delete = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await deleteItem(id);
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
