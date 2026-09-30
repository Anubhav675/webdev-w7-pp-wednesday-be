const express = require('express');


const {createProduct, getAllProducts, deleteProduct}=require('../controllers/productControllers');

const router = express.Router();

router.post('/', createProduct)
router.get('/', getAllProducts)
router.delete('/:productId', deleteProduct)


module.exports = router;