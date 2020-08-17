const express = require('express');
const router = express.Router();

console.log('Great!! Router is loaded!!');

// importing home controller
const homeController = require('../controllers/home_controller');

// if url: localhost:8000/task 
router.use('/task', require('./task'));

// render home page
router.get('/', homeController.home);

module.exports = router;