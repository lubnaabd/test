const express = require('express');
const Item = require('./Item');

const router = express.Router();

router.get('/get-Item', Item.get);
router.post('/post-Item', Item.post);
router.delete('/delete-Item/:id', Item.delete);

module.exports = router;
