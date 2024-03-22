const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const { getUsersAPI, postCreateUserAPI, putpdateUserAPI, deleteUserAPI } = apiController;


router.get('/users', getUsersAPI);

router.post('/users', postCreateUserAPI);

router.put('/users', putpdateUserAPI);

router.delete('/users', deleteUserAPI);

module.exports = router;


 


