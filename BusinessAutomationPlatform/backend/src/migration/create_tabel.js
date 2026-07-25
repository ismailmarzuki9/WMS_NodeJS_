const sequelize = require("../config/database");
const create_tb_user = require("./sequelinze_tbuser");
const create_tb_Supplier = require("./Supplier");
const create_tb_Customer = require("./Customer");
const create_tb_Category = require("./Category");
const create_tb_Toko = require("./Toko");
const create_tb_Product = require("./Product");
const create_tb_Stockmovment = require("./StockMovment");


// await namavariabelfilecetakbirutabel.sync(); // akan membuat tabel ketika yabel belum ada mirip migration pada Laravel
    async function migrate() {

        console.log("Database Connected");

        // await create_tb_user.sync(); // kode yang membuat tabel
        await create_tb_Supplier.sync(); // kode yang membuat tabel
        await create_tb_Customer.sync(); // kode yang membuat tabel
        await create_tb_Category.sync(); // kode yang membuat tabel
        await create_tb_Toko.sync(); // kode yang membuat tabel
        await create_tb_Product.sync(); // kode yang membuat tabel
        await create_tb_Stockmovment.sync(); // kode yang membuat tabel
        
        console.log("Tabel berhasil dibuat");
    }
    migrate();