import ChallengeBesar from "../source/Challenge besar.js";

const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Elektronik",
        price: 10000000,
        stock: 5
    },
    {
        id: 2,
        name: "Mouse",
        category: "Elektronik",
        price: 200000,
        stock: 50
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Elektronik",
        price: 500000,
        stock: 0
    },
    {
        id: 4,
        name: "Meja",
        category: "Furniture",
        price: 1500000,
        stock: 20
    },
    {
        id: 5,
        name: "Kursi",
        category: "Furniture",
        price: 750000,
        stock: 10
    }
];

let Hasil_map = ChallengeBesar(products)

console.log("Map Show All Data ", Hasil_map);