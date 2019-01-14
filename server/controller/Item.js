const getItem = require('../database/queries/getList');

exports.get = async (request, response) => {
  try {
    const result = await getItem();    
    response.status(200).send(result);
  } catch (error) {    
    response.status(500).send('Server Error');
  }
};
