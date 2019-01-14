
const mongoose = require('mongoose');
require('env2')('./config.env');


const dbConnection = () => {
  const { mongoURI } = process.env;

  mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
  ).then(() => {
    console.log('Connected to Database');
  }).catch((err) => {
    console.log('Not Connected to Database ERROR! ', err);
  });
};

module.exports = dbConnection;
