const express = require('express');
const router = express.Router();
const {getHomepage} = require('../controllers/homeController');
const {getABC} = require('../controllers/homeController');
const {getHehe} = require('../controllers/homeController');

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hehe', getHehe);

module.exports = router;
