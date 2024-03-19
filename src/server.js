require('dotenv').config();
const express = require('express') //import express
const path = require('path'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');


const app = express() // tạo express application
const port = process.env.PORT||8888; // init port
const hostname = process.env.HOSTNAME;

// config template engine
configViewEngine(app);

//khai báo routes
app.use('/',webRoutes); //app.use('/test',webRoutes);
//req (request), res(response) là 2 object trong môi trường Node.js

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

// nodemon tu khoi dong lai sv khi thay doi code