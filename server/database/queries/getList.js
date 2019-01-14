const Item = require('../models/items');


const getItem = () => new Promise((resolve, reject) => {
  Item.find()
    .then(result => resolve(result))
    .catch(reject);
});

module.exports = getItem;
