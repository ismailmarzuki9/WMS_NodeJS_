const { Sequelize } = require("sequelize");
const env = require('dotenv').config({
    path : "../../.env"
});

console.log(env);
console.log(process.env.DB_TYPE);

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

module.exports = dbseq;