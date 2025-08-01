import express from 'express';
import * as productController from '../controllers/productController.js'
import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', productController.getAllProducts); 
router.get('/:id', productController.getProductById); 

// Admin-only routes
router.post('/', auth, productController.createProduct);
router.put('/:id', auth, productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);

export default router;
