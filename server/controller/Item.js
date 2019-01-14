const getItem = require('../database/queries/getList');
const addItem = require('../database/queries/addList.js');

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
