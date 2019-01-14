const Item = require('../models/items');


const getItem = () => new Promise((resolve, reject) => {
  Item.find().sort([['_id', -1]])
    .then(result => resolve(result))
    .catch(err => reject(err));
});

module.exports = getItem;
