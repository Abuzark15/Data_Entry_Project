const express = require('express');
const router = express.Router();

const getSearchdata = require('../controller/searchController');

router.get('/search', getSearchdata);

module.exports = router;