const Item = require('../models/items');


const addItem = data => new Promise((resolve, reject) => {
  const item = new Item(data);
  item.save()
    .then(result => resolve(result))
    .catch(err => reject(err));
});

module.exports = addItem;
