
const  BelajarMap = (data) => {

    // let getName = data.map((data) => data.name);
    // let getKelas = data.map((data) => data.kelas);
    // let harga = data.filter((data) => data.harga >= 10000)
    // let stock =data.filter((p)=> p.stock === 0);
    // const lowStock = data.filter((p)=> p.stock <= 10);
    // const findName = data.find((p)=> p.name === "Andini");
    // const serch = data.filter((p)=> p.name.toLowerCase().includes("bud"))
    // const findindex = data.findIndex((p)=> p.name === "Andini");
    // const boleansome = data.some((p)=> p.stock === 0); Apakah ada produk yang stock-nya habis. jika ada minilmal satu maka akan true?
    // Apakah ada produk yang stock-nya habis. jika ada maka harus semua maka akan true?
    // const every = data.every((p)=> p.stock > 10);
    // console.log(data);
    // const total = data.reduce(
    //     (akumulasi , product) => {
    //         // console.log("product ::", product);
    //         // console.log("akumulasi", akumulasi);
    //         return akumulasi + (product.harga * product.stock);
    //     },
    //     0
    // )

    const AscHarga = [...data].sort( (a,b) => a.harga - b.harga );
    const DscHarga = [...data].sort( (a,b) => b.harga - a.harga );
    const AscNama = [...data].sort( (a,b) => a.nama.localeCompare(b.nama) );
    const DscNama = [...data].sort( (a,b) => b.nama.localeCompare(a.nama) );


    return {
        // getName,
        // getKelas
        // harga
        // stock,
        // lowStock
        // findName,
        // serch
        // findindex
        // boleansome,
        // every
        // total
        AscHarga,
        DscHarga,
        AscNama,
        DscNama
    }
    
}


export default BelajarMap;

