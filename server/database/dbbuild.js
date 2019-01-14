const Item = require('./models/items');

const dbConnection = require('./db_connection');

dbConnection();

const buildDb = async () => {
  await Item.deleteMany({});
  console.log('Item deleleted');
  
  await Item.insertMany([
    {
      title: 'lubna',
      discripation:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: 'sundus',
      discripation:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: 'osama',
      discripation:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ]);
  console.log('Item added');
};

buildDb().catch(err => console.error(err));

module.exports = buildDb;
