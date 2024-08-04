const express = require('express');
const router = express.Router();

//controllers 
const userController = require('../controllers/userController');

//define Routes 
router.get('/data',userController.getData);

module.exports = router



