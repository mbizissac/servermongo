const express = require('express');
const router = express.Router();
const {getHomepage} = require('../controllers/homeController');
const {getABC} = require('../controllers/homeController');
const {getHehe} = require('../controllers/homeController');
const {getCreatePage} = require('../controllers/homeController');

const {postCreateUser} = require('../controllers/homeController');

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hehe', getHehe);

router.get('/create', getCreatePage);

router.post('/create-user',postCreateUser);

module.exports = router;
