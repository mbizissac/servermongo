const express = require('express');
const routerAPI = express.Router();

const { getUsersAPI } = require('../controllers/apiController');

routerAPI.get('/', (req, res) => {
    res.send('Hello API');
})

routerAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data:"abc day nem"
    })
})

routerAPI.get('/users', getUsersAPI)

module.exports = routerAPI;


