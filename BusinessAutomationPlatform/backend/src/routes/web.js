import express from 'express';

// import userController from '../controllers/userController.js';
import supplierscontroller from '../controllers/supplierscontroller.js';
import customercontroller from '../controllers/customercontroller.js';


import AllController from '../controllers/Allcontroller.js';
// import Model
import produkModel from '../migration/Product.js';
import StockMovementModel from '../migration/StockMovment.js';
import tokoModel from '../migration/Toko.js'
import ModelCategory from "../migration/Category.js";
import ModelUser from "../migration/sequelinze_tbuser.js";
import TokoModel from "../migration/Toko.js";

const router = express.Router();

// router.get('/', userController.login);
router.get('/api/suppliers', supplierscontroller.getAll);
router.get('/api/customer', customercontroller.getAll);

// READ
router.get('/api/produk', AllController.getAll(produkModel));
router.get('/api/stockMovment', AllController.getAll(StockMovementModel,tokoModel));
router.get('/api/toko', AllController.getAll(tokoModel));
router.get('/api/category', AllController.getAll(ModelCategory));

// WRITE    
router.post('/api/toko', AllController.Post(TokoModel));



export default router;