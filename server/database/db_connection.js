
const mongoose = require('mongoose');
require('env2')('./config.env');


const dbConnection = () => {
  const { MONGOURI } = process.env;

  mongoose.connect(
    MONGOURI,
    { useNewUrlParser: true },
  ).then(() => {
    console.log('Connected to Database');
  }).catch((err) => {
    console.log('Not Connected to Database ', err);
  });
};

module.exports = dbConnection;
