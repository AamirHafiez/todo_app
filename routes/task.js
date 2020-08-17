const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task_controller');
// adding task
router.post('/add', taskController.add);

// delete task
router.post('/delete', taskController.delete);

module.exports = router;