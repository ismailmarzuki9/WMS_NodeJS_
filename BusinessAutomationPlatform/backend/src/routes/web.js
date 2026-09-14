import express from 'express';

// import userController from '../controllers/userController.js';
import supplierscontroller from '../controllers/supplierscontroller.js';

const router = express.Router();

// router.get('/', userController.login);
router.get('/api/suppliers', supplierscontroller.getAll);

export default router;