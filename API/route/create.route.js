const express = require('express');
const router = express.Router();
const createEmployee = require('../controller/createController')

router.post('/', createEmployee);

module.exports = router;