const express = require('express');
const images = require('../controllers/ImagesController');

const router = express.Router();

router.route('/images').get(images.GET);

module.exports = router;
