const verificationController = require('../controllers/verificationController');
const express = require('express');
const router = express.Router();



router.get('/verify/:bundleName', verificationController.verifyBundle);
router.post('/addBundle', verificationController.postBundle);


module.exports = router;