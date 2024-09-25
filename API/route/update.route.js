const express = require('express');
const router = express.Router();

const updateEmployee = require('../controller/updateController');

router.route('/:id')
.patch(updateEmployee);

module.exports = router;