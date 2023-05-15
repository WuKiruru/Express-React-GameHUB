const express = require('express');
const router = express.Router();
const recordsController = require('../controllers/recordController');

router.get('/:gameName', recordsController.getAllGameRecords);

module.exports = router;
