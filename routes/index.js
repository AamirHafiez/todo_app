const express = require('express');
const router = express.Router();

console.log('Great!! Router is loaded!!');

// importing home controller
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);

module.exports = router;