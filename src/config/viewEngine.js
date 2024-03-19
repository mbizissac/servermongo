const path = require('path');
const express = require('express');
const configViewEngine = (app) => {
//config template engine
app.set('views', path.join('./src','views'));
app.set('view engine', 'ejs');
// config static file
app.use(express.static(path.join('./src', 'public')));

}
//req (request), res(response) là 2 object trong môi trường Node.js

module.exports = configViewEngine;