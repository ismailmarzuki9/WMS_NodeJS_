import cors from "cors";
import express from 'express';
import routes from './src/routes/web.js';
// const expressLayouts = require('express-ejs-layout');
import cookieParser from 'cookie-parser';

const app = express();

//middleware
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use(cookieParser()); // untuk get cookie saat sudah login

app.use('/',routes);

app.listen(8080,() =>{
    console.log('Server BC running on Http://localhost:8080')
});