const express = require('express');
const router = express.Router();

const deleteHandler = require('../controller/deleteController');

router.delete('/:id', deleteHandler);

module.exports= router;