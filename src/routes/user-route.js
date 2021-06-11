const express = require('express');
const router = express.Router();
const controller = require('../controller/user-controller');

router.get('/', controller.getAllUser);
router.post('/', controller.addUser);

module.exports = router;