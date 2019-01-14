const express = require('express');
const Item = require('./Item');

const router = express.Router();

router.get('/get-Item', Item.get);
router.post('/post-Item', Item.post);

module.exports = router;
