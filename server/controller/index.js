const express = require('express');
const Item = require('./Item');

const router = express.Router();

router.get('/get-Item', Item.get);

module.exports = router;
