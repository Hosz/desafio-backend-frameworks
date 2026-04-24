const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.listUsers);
router.get('/example', userController.getExampleUser);

module.exports = router;
