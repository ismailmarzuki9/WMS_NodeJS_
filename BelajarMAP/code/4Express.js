// // LEVEL 4 — Express

// // app
   // folder utaman project
// route
//  folder atau file yang mengatur url.
//  ex :
 router.get('/api/suppliers', supplierscontroller.getAll);
// middleware
//    folder atau file antara request dan respon yang tugasnya melihat autentikasi & Otorize, mencatat aktivitas
//    ex: cek apakah yang login admin

   const cekAdmin = (req, res, next) => {
      const UserRole = req.query.User;
      if (UserRole == 'admin'){
         next();
      }else {
         res.json({
            message : "Akses ditolak"
         })
      }
   }
// request
//    folder atau file menampung dan memproses permintaan 
   // ex :
   async function getData(URL_dan_edpoint_driContrroler) {
      try {
         const respon = await fetch(URL_dan_edpoint_driContrroler);

         if (!respon.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const data = respon.json();
         return data;
      } catch (error) {
         res.json({
            message : "Akses ditolak"
         })  
      }
   }

// response
//    folder atau file mengembalikan dan memproses response
      // ex :dari frontend meneruskan ke route backend > contrroler > model > data di dapat
   async function respont (req, res){
      res.json()
   }
// controller
//    folder atau file meneruskan tugas ataupun permintaan baik meneruskan pada service, mengirim pada view
//    meneruskan atau menerima respon dari model dan lainnya.
   class ProductController {

       static async show(req, res) {
         const data = await NamaModel.aksimodelGet_DSC;
         res. kirim ke frontend
       }
   }
// error handling
//    mekanisme untuk mendapatkan catch(error) untuk di kelola dan menangani kesalahan 
   buatkan contoh code error handling 
   dimana semua code error ada pada file catch dan akan mengimkan pada file logError
   middlewares/errorHandler.js
   const logError = require("../utils/logError");

      const errorHandler = (err, req, res, next) => {
         logError(err);

         res.status(500).json({
            status: "error",
            message: "Internal Server Error"
         });
      };
      // di controller
      const supplierController = {
    async getAll(req, res, next) {
        try {
            const data = await supplierService.getAll();

            res.status(200).json({
                status: "success",
                data: data
            });

        } catch (error) {
            next(error); mengirimke file errorHandler
        }
    }
};

module.exports = supplierController;

module.exports = errorHandler;

// PostgreSQL
//     ↓
// Model
//     ↓
// Service
//     ↓
// Controller
//     ↓
// catch(error)
//     ↓
// next(error)
//     ↓
// errorHandler
//     ↓
// logError
//     ↓
// res.status(500).json()
//     ↓
// React
//--------------=================================------------


// # LEVEL 5 — React

// Component
   // bagain atau function yang dapat di gunakan berulang-ulang misal tombol, alert dan lain-lain
   //ex :
   //componets
   function Sapa(props){
      return <h1> Haii nama Aku , {props.name}</h1>
   }
   // cara menggunakan componets di komponen induk
   function app () {
      return (
         <div>
            <Sapa nama="Ismail"/>
            <Sapa nama="Beben"/>
         </div>
      )
   }
// JSX
   // format file .jsx yang memungkinkan kita menulis HTML di dalam kode JavaScript
// Props
   // cara mengirim data dari komponen induk (parent component) ke komponen anak (child component)
   // contoh diatas pada komponen app ke komponen Sapa
// State useState
   // obejc internal mengatur perubahan
   // ex 
   const [data,useData] =useState(0)
// useEffect
   // karena dalam react fungsi harus meneriam data lalu menampilkan di UI. sehingga jika ada request dari
   // frontend ke backed ini akan terjadi infiniate loop karena request yang terus menerus
   // dengan useEffect bertugas sebagai "pintu keluar" yang aman. 
   // Ia memberi tahu React: "Tolong gambar UI-nya dulu sampai selesai. 
   // Kalau sudah rapi di layar, baru jalankan fungsi fetch ini di latar belakang, 
   // dan cukup lakukan sekali saja."
// Event
   // aksi yang terjadi dari user seperti onClik, onSubmit ataupun even yang di buat sendri
   // ex :
      onClick={tanganiKlik}
      // 1. Contoh Fungsi untuk Event Tombol (Click Event)
         const tanganiKlik = () => {
            setHitung(hitung + 1);
         };
      onChange={tanganiPerubahanInput}
      // 2. Contoh Fungsi untuk Input Teks (Change Event)
         const tanganiPerubahanInput = (event) => {
            // 'event.target.value' mengambil teks yang sedang diketik oleh pengguna
            setNama(event.target.value); 
         };
      onMouseEnter={() => console.log('Mouse masuk ke kotak!')}
      onMouseLeave={() => console.log('Mouse keluar dari kotak!')}
// Conditional rendering
   // Conditional rendering = menampilkan sesuatu berdasarkan kondisi tertentu
   function Rumah() {
      const sudahLogin = true;

      return (
         <div>
            <h1>Rumah Saya</h1>

            {sudahLogin ? ( // jika kondisi sudah login
            <p>Selamat datang!</p>
            ) : (
            <p>Silakan login terlebih dahulu.</p>
            )}
         </div>
      );
   }

// List rendering
   // menampilkan banyak data dari sebuah array. biasanya menggunkan method array Map.
   function Rumah() {
      const ruangan = [
         "Kamar Utama",
         "Kamar Anak",
         "Kamar Tamu",
         "Dapur",
         "Garasi"
      ];

      return (
         <div>
            <h1>Daftar Ruangan</h1>

            {ruangan.map((nama) => (
            <p key={nama}>{nama}</p>
            ))}
         </div>
      );
   }

// Form
// Controlled component
   // input HTML yang nilainya di kontrol oleh react melalui state.
   // ex : input html value={nama} yang di atur react melalui setNama(even.target.value)
   import { useState } from "react";

   function FormRumah() {
      const [nama, setNama] = useState("");

      return (
         <form>
            <label>
            Nama:

            <input
               type="text"
               value={nama}
               onChange={(event) => setNama(event.target.value)}
            />
            </label>

            <p>Nama Anda: {nama}</p>
         </form>
      );
   }


//  Kemudian:


// fetch API
// loading
// error
// data


//  Contoh mental model:


// const [suppliers, setSuppliers] = useState([]);


//  berarti:


// React menyimpan data suppliers


//  Kemudian:


// useEffect(() => {
//     loadSuppliers();
// }, []);


//  berarti:


// Component muncul
//        ↓
// jalankan effect
//        ↓
// request API
//        ↓
// dapat data
//        ↓
// setSuppliers()
//        ↓
// React render ulang


//  Kalau kamu memahami alur ini, React tidak akan terasa sebagai kumpulan syntax.

// ---