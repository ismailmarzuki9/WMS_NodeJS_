// JavaScript fundamental
// variable
 const id =''; // variabel constan untuk nilai yang tidakakan berubah
 var namaSaya = ''; // sudah tidak disarankan
 let namo = ''; //  untuk nilai variabel yang akan di ubah kembali

//data type
let number = 9;
let  String_tes = "Hallo manusia";
const bb = true;
let namaSaya2 = undefined;
let angkabesar = BigInt(1234678999987654414n);
let symbl = Symbol("<->");
let object ={
    nama : "Baqarah",
    umur : 27
}
const array = ['apel', 'mangga', 'pisang'];

//array
    // array biasa
    const ary = ['apel', 'mangga', 'pisang'];
    //arrow function
    const calculation = (a,b) => {
        let X = a+b;
        return (
            X
        )
    }
    // array duadimensi 
    const codeData = [
                        ["apel", true], // baris 0
                        [1, 14],            // baris 1
                        [5.6 , "A"] // baris 2
                    ];
    console.log(codeData[1][1]) // out angka 14
    console.log(codeData[2][1]) // out "A"

    // array multidimensi Array dengan tiga dimensi atau lebih
    const codeBitmulti = [
                        ["apel", true, [1, 2, 3]],              // baris 0
                        [1, ['pisang', [2, 3, ["A", "B", "C","D"]]]],     // baris 1
                        [5.6 , "A"]                             // baris 2
                    ]; 
    console.log(codeBitmulti[1][1][1][2][3]); // output D




// object
    const objController = {
        //bisa berisi function atau yang lain.
        fgetdata(a){
            return "data didapat";
        }
    }

// function
    let barisData=[]
    function addData(Data) {
        barisData.push(Data);
    }
    addData("namaBudi");
    console.log(barisData);

// arrow function
    const Sapa = () => {
        console.log(Sapa);
    }
    Sapa();

// scope
    // in scope dimana variabel tidak dapat di akases di luar function
    const mobil = () => {
        let type ="sedan";
        console.log(type);
    }
    // console.log(type); // ini tidak akan bisa
    // global function dimana varibel dapat di akses di mana saja
    let useData= [];
    const BankBaqatrah =() => {

        incetion =(nominal)=>{
            nominal+=10000
            nominal.push(useData)
        }
    }
    console.log(useData);
    
// if dan else ( kondisi )
let cuaca = "hujan"
    if(cuaca  == "hujan"){
        console.log("pakai payung")
    }else{
        console.log(" lari diluartanpa payung");
    }
// loop adalah perulang
var nilai = 1
 do {
    console.log("run ke", + nilai);
    nilai++;
 } while (nilai < 3)

 for (let i = 0; i < array.length; i++) {
    const element = array[i];  
 }
         //dan perulangan lainya
// map adalah salah satu method arrya dan masih ada yang lain di JS seperti find,filter dan lain
 const arry = ["A", 2, 2003, 1999, "XEX"];
    const AB= arry.map(String);
    // filter
    const fil = arry.filter(a => a.length >1)
// find
    const cari2 = arry.find(a => String(a).includes("2"));
// destructuring memcal atau membongkar array
    const [pertama, kedua, ketiga] = arry
    console.log(ketiga);
// spread operator method array membongkar dan menaylin ke tempat baru
 const tempat_baru=[...arry, "+.. Apel", "Pisang"];
    console.log(tempat_baru);

//template literal
    // Template literals adalah cara modern dalam JavaScript untuk membuat string. 
    // Fitur yang dirilis sejak ES6 (2015) ini menggunakan tanda backtick (`), 
    // bukan tanda petik tunggal (') atau ganda (").
    const nama = "Budi"
    const umur = 27
    console.log(`Hallo nama sata ${nama} saya berusia ${umur}`);

// //module memacah bebrapa file agar kode rapi dan mudah 
//     //  maintance menggnkan import dan export (import & export)
//     //filedata.js
//     let panjang = 10
//     let tinggi = 12
//     let lebar= 13
//     export default filedata;
// //--------------------------
//     import {a,b,c }from filedata;

//     filehitung.js
//     const volue =(a,b,c)=>{
//         let volum = a *b * c;
//         return volume
//     }

// class cetakan (blueprint) untuk membuat sebuah objek. 
// Class digunakan untuk menerapkan konsep OOP (Object-Oriented Programming) agar kode lebih terstruktur.
    // A private dan public fields
    class BankDana {
        // properti public
        nama;
        #saldo;
        bonus;

        constructor(nama) {
            this.nama = "S.kom";
            this.#saldo;            
        }

        // GETTER: Cara aman untuk melihat saldo
        get ceksaldo(){
            return `saldo anda sebesar Rp ${this.#saldo}`
        }
        // SETTER: Cara aman untuk mengubah/menambah saldo dengan validasi
        set total (value){
            if (this.#saldo>0) {
                const tot = 5000 +this.#saldo;
                return tot;
            }else{
                console.log( `Anda dengan nama ${this.nama} tidak ada saldo atau ${this.#saldo}`)
                // ini bisa dengar return karena Setter dan getter biasanya dengan return
            }
        }
    }
    const Boss = new BankDana("Andi",2000,2500);
    const staff = new BankDana("Bobi",1000,500);
    //console.log(Boss.#saldo);// ini tidak akan bisa mengakses saldo
    console.log(Boss.ceksaldo);
    console.log(Boss.total);

    console.log(staff.total);
    //B. Static Fields & Methods (Milik Class Sendiri)Properti atau method Static ditandai 
    // dengan kata kunci static. Properti/method ini tidak melekat pada objek buatan (instance),
    //  melainkan menempel langsung pada Class itu sendiri. 
    //Anda tidak perlu mengetik new Class() untuk menggunakannya.

    class CRUD {
        static async show(){
            return("Hello")
        }
        static async getData(nama,gaji){
            let total = 5000 + gaji;
            return `Hai kamu ${nama} mendapatkan Rp ${total}`;
        }
    }
    console.log(CRUD.show);
    console.log(CRUD.getData("andi",7000));
    console.log(CRUD.getData("Lesi",3000));

    // C. inheritance atau pewarisan 
    // Class JavaScript mendukung Inheritance (pewarisan sifat dari induk class ke anak class)
    // menggunakan kata kunci extends dan super().
    class DevisILC {
                        // constructor adalah method khusus yang otomatis dijalankan
                        //  pertama kali saat kita membuat objek baru dari sebuah class 
                        // menggunakan kata kunci new.
                        // Tugas utamanya adalah untuk menerima data dari luar (parameter) 
                        // dan menyiapkan data awal (inisialisasi properti) 
                        // agar objek tersebut memiliki nilai awal yang siap digunakan. 
                        // Sebuah class hanya boleh memiliki satu constructor
        constructor(){
            this.nama;
            this.umur;
            this._gajipokok= 5000; // Ditandai dengan '_' (Protected kesepakatan)
        }

        proses(tunjangan){
            let total = tunjangan + this._gajipokok;
            return `Haii ${nama} dengan umur ${umur} mendapatkan ${total}`;
        }
    }

    class Pangkat extends DevisILC {
        constructor(nama, umur) {
            // super(nama); // PERBAIKAN: super() digabung dan dipanggil paling atas sebelum 'this'
            super(nama, umur); // Memanggil constructor milik class induk DevisILC
            this.pangkat;
        }

        cekpangkat (pangkat){ // ini adaha method atau fungsi yang berada dalam kelas
            if(this.umur>25){
                this.pangkat = "Karyawan Gol B"
            }else{
                this.pangkat = "Karyawan Gol C"
            }
            return `Haii ${nama} dengan umur ${umur} mendapatka ${this.pangkat}`
        }
    }

    const Andi = new Pangkat("Andi", 26 );
    console.log(Andi.proses(3000));
    console.log(Andi.cekpangkat());

// Class adalah cetak biru dapat beris satu atau lebih object maupun function
// function di dalam class di sebut method pada class selain static karena menggunakan new
// harus menggunkan constructur yang berisi this. agar dapat di bedakan dengan varibel biasa
// jika menggunaka statis class ini tidak perlu karena statis dapat di panggil tanpa new 
//atau langsung pada method nya misal class Total memiliki method tambah maka langsung Total.tambah()
// dapat di gunkan untuk membungkus banyak object maupun function

// object adalah pembungkus kode yang berisi lebih dari satu function 
// object lebih ringan karena hanya const nama_object {} sehingga mudah untuk di export
// atau di gunkan pada file lain

// function adalah funsi yang memiliki satu tugas misa function add, deleted


// Promise
// async
// await
// try/catch
// fetch
// JSON

// jawaban;
// const ambil_data = async = (req, res)=> {
//     try {
//         const result = await fetch('bisa url atau method yang mengarah ke api');
//         return res.json(result);

//     } catch (error) {
//         console.res.code(500).message(
//             "Servel error"
//         )
//     }
// }

const ambil_data = async (req, res) => {
    try {
        const result = await fetch(
            'http://localhost:8080/api/suppliers'
        );

        if (!result.ok) {
            throw new Error(`HTTP Error: ${result.status}`);
        }

        const data = await result.json();

        return res.json(data);

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};