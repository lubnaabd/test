const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
  },
  discripation: {
    type: String,

  },
});

module.exports = Item = mongoose.model('items', ItemSchema);