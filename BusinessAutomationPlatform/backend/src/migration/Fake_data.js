import sequelize from "../config/database.js";
import create_tb_Customer from "./Customer.js";
import create_tb_Supplier from "./Supplier.js";
import create_tb_Product from "./Product.js";
import create_tb_category from "./Category.js";
import create_tb_stockMovmnet from "./StockMovment.js";
import create_tb_toko from "./Toko.js";
import create_faker_user from "./sequelinze_tbuser.js";

import { faker } from '@faker-js/faker';

async function seedDatabase() {
    try {
        console.log("Menghubungkan ke database...");
        // 1 User Faker
        const fakerUsers = Array.from({ length: 5 }).map(() => {
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            const username = faker.internet
                .username({
                    firstName,
                    lastName
                })
                .toLowerCase();
            return {
                email: faker.internet.email({
                    firstName,
                    lastName
                }).toLowerCase(),
                username,
                password_hash: faker.person.firstName(),
                role: faker.helpers.arrayElement([
                    "admin",
                    "manager",
                    "staff",
                    "cashier"
                ]),
                refresh_token: null,
                is_active: true,
                email_verified: true,
                failed_login_attempts: 0,
                locked_until: null,
                last_login_at: null,
                created_at: faker.date.past({
                    years: 1
                }),
                updated_at: new Date()
            };
        });
        //
        
        // 1. Generate 10 data Customer palsu
        const fakeCustomers = Array.from({ length: 10 }).map(() => ({
            name: faker.person.fullName(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress()
        }));

        // 2. Generate 50 data Supplier palsu
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

        const fakeProducts = Array.from({ length: 10 }).map(() => ({
            category_id: faker.number.int({ min: 1, max: 5 }),
            supplier_id: faker.number.int({ min: 1, max: 5 }),

            sku: `SKU-${faker.string.alphanumeric(8).toUpperCase()}`,

            barcode: faker.string.numeric(13),

            name: faker.commerce.productName(),

            purchase_price: faker.number.int({
                min: 10000,
                max: 400000
            }),

            selling_price: faker.number.int({
                min: 15000,
                max: 500000
            }),

            minimum_stock: faker.number.int({
                min: 5,
                max: 20
            }),

            status: true
        }));

//====================================TOKO=
        const fakerToko = Array.from({length: 10 }).map(()=>({
            name :`PT ${faker.company.name()}`,
            symbol :`TK-${faker.string.alphanumeric(6).toUpperCase()}`
        }))


//={============fakerStockMovement========================
    async function fakerStockMovement(){
            // Ambil ID dari database
        const products = await create_tb_Product.findAll({
            attributes: ["Product_id"],
            raw: true
        });

        const tokos = await create_tb_toko.findAll({
            attributes: ["toko_id"],
            raw: true
        });

        const customers = await create_tb_Customer.findAll({
            attributes: ["customer_id"],
            raw: true
        });

        const users = await create_faker_user.findAll({
            attributes: ["userid"],
            raw: true
        });
        
        // // Ubah hasil query menjadi array ID
        const productIDs = products.map(product => product.Product_id);
        const tokoIDs = tokos.map(toko => toko.toko_id);
        const customerIDs = customers.map(customer => customer.customer_id);
        const userIDs = users.map(user => user.userid);

        // // Pastikan tabel master sudah memiliki data
        if (productIDs.length === 0) {
            throw new Error("Tabel products masih kosong.");
        }

        if (tokoIDs.length === 0) {
            throw new Error("Tabel toko masih kosong.");
        }

        if (userIDs.length === 0) {
            throw new Error("Tabel users masih kosong.");
        }


        // // Generate stock movement
        const fakerStockMovement = Array.from({ length: 20 }).map(() => {

            const referenceType = faker.helpers.arrayElement([
                "PURCHASE",
                "SALE",
                "TRANSFER",
                "ADJUSTMENT",
                "STOCK_OPNAME"
            ]);

            let movementType;

            switch (referenceType) {

                case "PURCHASE":
                    movementType = "IN";
                    break;

                case "SALE":
                    movementType = "OUT";
                    break;

                case "TRANSFER":
                    movementType = faker.helpers.arrayElement([
                        "TRANSFER_IN",
                        "TRANSFER_OUT"
                    ]);
                    break;

                case "ADJUSTMENT":
                case "STOCK_OPNAME":
                    movementType = faker.helpers.arrayElement([
                        "ADJUSTMENT_PLUS",
                        "ADJUSTMENT_MINUS"
                    ]);
                    break;
            }

            const stockBefore = faker.number.int({
                min: 0,
                max: 100
            });

            const qty = faker.number.int({
                min: 1,
                max: 20
            });

            const isStockIncrease = [
                "IN",
                "TRANSFER_IN",
                "ADJUSTMENT_PLUS"
            ].includes(movementType);

            const stockAfter = isStockIncrease
                ? stockBefore + qty
                : Math.max(0, stockBefore - qty);


            return {

                product_id: faker.helpers.arrayElement(productIDs),

                toko_id: faker.helpers.arrayElement(tokoIDs),

                customer_id:
                    referenceType === "SALE" && customerIDs.length > 0
                        ? faker.helpers.arrayElement(customerIDs)
                        : null,

                reference_no:
                    `REF-${faker.string.alphanumeric(10).toUpperCase()}`,

                reference_type: referenceType,

                movement_type: movementType,

                qty: qty,

                purchase_price: faker.number.float({
                    min: 10000,
                    max: 400000,
                    fractionDigits: 2
                }),

                selling_price: faker.number.float({
                    min: 15000,
                    max: 500000,
                    fractionDigits: 2
                }),

                stock_before: stockBefore,

                stock_after: stockAfter,

                remark: faker.helpers.arrayElement([
                    "Pembelian barang",
                    "Penjualan barang",
                    "Transfer stok",
                    "Penyesuaian stok",
                    "Stock opname"
                ]),

                created_by: faker.helpers.arrayElement(userIDs)
            };
        });

        return fakerStockMovement;

    }        
//==}===================================

//================= Masukkan data ke database menggunakan bulkCreate
        await create_faker_user.bulkCreate(fakerUsers);
        await create_tb_Customer.bulkCreate(fakeCustomers);
        await create_tb_Supplier.bulkCreate(fakeSuppliers);
        await create_tb_category.bulkCreate(fakerCategory);
        await create_tb_toko.bulkCreate(fakerToko);
        await create_tb_Product.bulkCreate(fakeProducts);

        const data = await fakerStockMovement();
        await create_tb_stockMovmnet.bulkCreate(data);
//===================================masuk data bulkCreate

        console.log(" Data fake berhasil dimasukkan!");

    } catch (error) {
        console.error("Gagal mengisi data:", error);
    } finally {
        await sequelize.close();
    }
}

seedDatabase();
