const express = require('express');


const {createProduct, getAllProducts, deleteProduct, getProductById}=require('../controllers/productControllers');

const router = express.Router();

router.post('/', createProduct)
router.get('/', getAllProducts)
router.delete('/:productId', deleteProduct)
router.get('/:productId', getProductById)


module.exports = router;