const express = require('express');
const fileUpdate = require('../controllers/FileUploadController');

const router = express.Router();

router.route('/upload').post(fileUpdate.POST);

module.exports = router;
