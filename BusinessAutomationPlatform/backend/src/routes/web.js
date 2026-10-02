import express from 'express';

// import userController from '../controllers/userController.js';
import supplierscontroller from '../controllers/supplierscontroller.js';
import customercontroller from '../controllers/customercontroller.js';

import AllController from '../controllers/AllController.js';
// import Model
import produkModel from '../migration/Product.js';
import StockMovementModel from '../migration/StockMovment.js';
import tokoModel from '../migration/Toko.js'
import ModelCategory from "../migration/Category.js";

const router = express.Router();

// router.get('/', userController.login);
router.get('/api/suppliers', supplierscontroller.getAll);
router.get('/api/customer', customercontroller.getAll);

// READ
router.get('/api/produk', AllController.getAll(produkModel));
router.get('/api/stockMovment', AllController.getAll(StockMovementModel));
router.get('/api/toko', AllController.getAll(tokoModel));
router.get('/api/category', AllController.getAll(ModelCategory));



export default router;