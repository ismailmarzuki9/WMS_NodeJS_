import sequelize from "../config/database.js";
import create_tb_Customer from "./Customer.js";

import { faker } from '@faker-js/faker';

async function seedDatabase() {
    try {
        console.log("Menghubungkan ke database...");
        
        // 1. Generate 10 data Customer palsu
        const fakeCustomers = Array.from({ length: 10 }).map(() => ({
            name: faker.person.fullName(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress()
        }));

        // 2. Generate 10 data Product palsu
        // const fakeProducts = Array.from({ length: 10 }).map(() => ({
        //     product_name: faker.commerce.productName(),
        //     price: faker.commerce.price({ min: 10000, max: 500000, dec: 0 }),
        //     stock: faker.number.int({ min: 10, max: 100 })
        // }));

        // 3. Masukkan data ke database menggunakan bulkCreate
        await create_tb_Customer.bulkCreate(fakeCustomers);
        // await create_tb_Product.bulkCreate(fakeProducts);

        console.log(" Data fake berhasil dimasukkan!");
    } catch (error) {
        console.error("Gagal mengisi data:", error);
    } finally {
        await sequelize.close();
    }
}

seedDatabase();
