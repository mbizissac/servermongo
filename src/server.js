const express = require('express') //import express
const path = require('path'); //commonjs
require('dotenv').config();

const app = express() // tạo express application
const port = process.env.PORT||8888; // init port
const hostname = process.env.HOSTNAME;

//config template engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// config static file
app.use(express.static(path.join(__dirname, 'public')));
//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
app.get('/', (req, res) => {
 res.send('Hello World! xai  nodemon ne')
})

app.get('/hehe', (req, res) => {
    res.send('Hello World! qqqqq q   qq qxae ')
})
app.get('/abc', (req, res) => {
    res.render('sample.ejs')
})

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

// nodemon tu khoi dong lai sv khi thay doi code