import sequelize from "../config/database.js";
import create_tb_Customer from "./Customer.js";
import create_tb_Supplier from "./Supplier.js";
import create_tb_Product from "./Product.js";
import create_tb_category from "./Category.js";
import create_tb_stockMovmnet from "./StockMovment.js";
import create_tb_toko from "./Toko.js";

import { faker } from '@faker-js/faker';

async function seedDatabase() {
    try {
        console.log("Menghubungkan ke database...");
        
        // 1. Generate 10 data Customer palsu
        const fakeCustomers = Array.from({ length: 1 }).map(() => ({
            name: faker.person.fullName(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress()
        }));

        // 2. Generate 10 data Product palsu
        const fakeProducts = Array.from({ length: 10 }).map(() => ({
            product_name: faker.commerce.productName(),
            price: faker.commerce.price({ min: 10000, max: 500000, dec: 0 }),
            stock: faker.number.int({ min: 10, max: 100 })
        }));

        // 3. Generate 50 data Supplier palsu
        const fakeSuppliers = Array.from({ length: 5 }).map(() => ({
            company_name: faker.commerce.productName(),
            owner_name  : faker.person.fullName(),
            phone       : faker.phone.number(),
            email       : faker.internet.email(),
            address     : faker.location.streetAddress()
        }));

        const fakerCategory = Array.from ({length : 20}).map(()=>({
            name : faker.person.fullName(),
        }));

        const userID= [11, "12D", 33, 44];
        const fakerStockMovement = Array.from({ length :20 }).map(()=>({
            reference_no : faker.string.uuid(),
            reference_type: faker.helpers.arrayElement([
                                                            "PURCHASE",
                                                            "SALE",
                                                            "TRANSFER",
                                                            "ADJUSTMENT",
                                                            "STOCK_OPNAME"
                                                        ]),
            movement_type : faker.helpers.arrayElement([
                                                            "IN",
                                                            "OUT",
                                                            "TRANSFER_IN",
                                                            "TRANSFER_OUT",
                                                            "ADJUSTMENT_PLUS",
                                                            "ADJUSTMENT_MINUS"
                                                        ]),
            qty : faker.number.int({min: 1, max: 10}),
            purchase_price : faker.finance.amount({ min: 5, max: 10, dec: 5, symbol: 'Rp', autoFormat: true }), // '9,75067'
            selling_price : faker.finance.amount({ min: 5, max: 10, dec: 5, symbol: 'Rp', autoFormat: true }),
            stock_before : faker.number.int({min: 1, max: 10}),
            stock_after : faker.number.int({min: 1, max: 10}),
            remark : faker.animal.bird(),
            created_by : faker.helpers.arrayElement(userID)
        }));

        const fakerToko = Array.from({}).map(()=>({
            name :faker.company(),
            symbol :faker.string.symbol()
        }))

        //=== Masukkan data ke database menggunakan bulkCreate
        await create_tb_Customer.bulkCreate(fakeCustomers);
        await create_tb_Supplier.bulkCreate(fakeSuppliers);
        await create_tb_Product.bulkCreate(fakeProducts);
        await create_tb_category.bulkCreate(fakerCategory);
        await create_tb_stockMovmnet.bulkCreate(fakerStockMovement);
        await create_tb_toko.bulkCreate(fakerToko);


        console.log(" Data fake berhasil dimasukkan!");
    } catch (error) {
        console.error("Gagal mengisi data:", error);
    } finally {
        await sequelize.close();
    }
}

seedDatabase();
