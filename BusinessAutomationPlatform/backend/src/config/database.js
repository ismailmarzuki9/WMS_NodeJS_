import dotenv from 'dotenv';
import { Sequelize } from "sequelize";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log("INI isi  ",__dirname);
dotenv.config({
    path: path.resolve(__dirname, "../../.env")
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


//==========NOTE======================================================|||||||||||||||||||||||||
// import dotenv from "dotenv";
// // memasukkan package dotenv yang sebelumnya sudah di-install.
// // dotenv digunakan untuk membaca file .env.

// import path from "path";
// // memasukkan module path bawaan Node.js.
// // Digunakan untuk mengolah dan membuat path file/folder.

// import { fileURLToPath } from "url";
// // memasukkan fungsi fileURLToPath dari module url bawaan Node.js.
// // Digunakan untuk mengubah URL file menjadi path filesystem.


// const __filename = fileURLToPath(import.meta.url);
// // import.meta.url memberikan URL dari file yang sedang dijalankan.
// // fileURLToPath mengubah URL tersebut menjadi path file.
    // MISAL :
    //         import.meta.url
    //     ↓
    //     file:///D:/WMS/backend/src/config/config.js

    //     fileURLToPath(...)
    //     ↓
    //     D:/WMS/backend/src/config/config.js

    //     __filename
    //     ↓
    //     "D:/WMS/backend/src/config/config.js"   
// // __filename menyimpan path lengkap file saat ini.


// const __dirname = path.dirname(__filename);
// // path.dirname mengambil folder dari __filename.
// // __dirname menyimpan path folder tempat file saat ini berada.


// dotenv.config({
//     path: path.resolve(__dirname, "../../.env")
// });
// // dotenv.config() menjalankan konfigurasi dotenv.
// // path menentukan lokasi file .env.
// // path.resolve() membuat absolute path berdasarkan __dirname.
// // ../../ digunakan untuk naik dari:
// // backend/src/config
// // menjadi:
// // backend
// // kemudian mencari:
// // backend/.env

//==========NOTE======================================================|||||||||||||||||||||||||