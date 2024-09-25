const express = require('express');
const router = express.Router();

const getLogin = require('../controller/loginController');

router.post('/', getLogin);

module.exports = router;