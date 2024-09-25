const express = require('express');
const router = express.Router();

const getAllUser = require('../controller/userController')


router.route('/')
.get(getAllUser);

module.exports = router;