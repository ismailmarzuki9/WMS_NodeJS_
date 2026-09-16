import Belajar from "../source/Map.js";

// console.log(Belajar);

const datasumber1 =[

    {
    nama : "Muhammad Budi",
    kelas: "IV",
    harga: 10000,
    stock : 10
    },

    {
    nama : "Andini",
    kelas: "IIV",
    harga: 11000,
    stock : 50
    },

    {
    nama: "Budana",
    kelas: "XV",
    harga: 15000,
    stock : 0
    },
    {
    nama: "eri",
    kelas: "VV",
    harga: 25000,
    stock : 0
    },
    {
    nama: "Budi Santoso",
    kelas: "IIIV",
    harga: 45000,
    stock : 0
    },
]

let hasil = Belajar(datasumber1);
console.log(hasil);