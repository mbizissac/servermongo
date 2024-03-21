require('dotenv').config();
const express = require('express') //import express
//const path = require('path'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes =  require('./routes/api');
const connection = require('./config/database');


const app = express() // tạo express application
const port = process.env.PORT||8888; // init port
const hostname = process.env.HOSTNAME;


//config reg.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// config template engine
configViewEngine(app);

//khai báo routes
app.use('/',webRoutes); //app.use('/test',webRoutes);
app.use('/v1/api/',apiRoutes); 




// ket noi toi database truoc , check database truoc khi chay may chu
//seft running function
(async() => {
    // anonymous function   
    try {
       // test connection
      await connection();   
      app.listen(port, hostname, () => {
          console.log(`Back end app listening at http://${hostname}:${port}`)
      })

    } catch (error) {
        console.log("Error connect db",error); 
        
    }
})();
//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

// nodemon tu khoi dong lai sv khi thay doi code