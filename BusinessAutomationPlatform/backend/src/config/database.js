import env from 'dotenv';
// const { Sequelize } = require("sequelize");

import { Sequelize } from "sequelize";

// const env = require('dotenv').config({
//     path : "../../.env"
// });

env.config({ 
    path : ".env"
});

// console.log(env);
// console.log(process.env.DB_TYPE);

const dbseq = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        dialect: process.env.DB_TYPE
    }
);
// console.log("DB_NAME:", process.env.DB_NAME);
// console.log("DB_USER:", process.env.DB_USER);
// console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
// console.log("DB_HOST:", process.env.DB_HOST);
// console.log("DB_PORT:", process.env.DB_PORT);
// console.log("DB_TYPE:", process.env.DB_TYPE);
export default dbseq;