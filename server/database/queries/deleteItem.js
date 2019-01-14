const Item = require('../models/items');


const deleteItem = id => new Promise((resolve, reject) => {


  Item.remove({ _id: id })
    .then(result => resolve(result))
    .catch(err => reject(err));
});

module.exports = deleteItem;
