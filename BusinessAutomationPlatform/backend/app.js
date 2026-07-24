const express = require ('express');
const routes = require('./app/routers/web');
// const expressLayouts = require('express-ejs-layout');
const cookieParser = require('cookie-parser');

const app = express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cookieParser()); // untuk get cookie saat sudah login

app.use('/',routes);

app.listen(8080,() =>{
    console.log('Server BC running on Http://localhost:8080')
});