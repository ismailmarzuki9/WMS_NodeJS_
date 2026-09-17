// JavaScript fundamental
// variable
 const id =''; // variabel constan untuk nilai yang tidakakan berubah
 var nama = ''; // sudah tidak disarankan
 let nama = ''; //  untuk nilai variabel yang akan di ubah kembali

//data type
let number = 9;
let  String = "Hallo manusia";
const b = true;
let nama = undefined;
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
        let b = a+b;
        return (
            b
        )
    }
    // array duadimensi 
    const codeData = [
                        ["apel", true], // baris 0
                        [1, 14],            // baris 1
                        [5.6 , "A"] // baris 2
                    ];
    console.log(codeData[1][1]) // out angka 1
    console.log(codeData[2][2]) // out "A"

    // array multidimensi Array dengan tiga dimensi atau lebih
    const codeBitmulti = [
                        ["apel", true, [1, 2, 3]],              // baris 0
                        [1, ['pisang', [2, 3, ["A", "B", "C","D"]]]],     // baris 1
                        [5.6 , "A"]                             // baris 2
                    ]; 
    console.log(codeBitmulti[1][1][2][3]); // output D




// object
    const objController = {
        //bisa berisi function atau yang lain.
        fgetdata(a){
            console.log("data didapat");
        }
    }

// function
    let barisData=[]
    function addData(Data) {
        Data.push(b);
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
    const mobil () => {
        let type ="sedan";
        console.log(type);
    }
    console.log(type); ini tidak akan bisa
    // global function dimana varibel dapat di akses di mana saja
    let useData= [];
    
// if dan else

loop
map
filter
find
destructuring
spread operator
template literal
module
import / export