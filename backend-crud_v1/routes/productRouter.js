const express = require('express');
// const reqAuth = require('../middleware/requireAuth')
const {createProduct, getAllProducts, deleteProduct, getProductById, updateProduct}=require('../controllers/productControllers');

const router = express.Router();

router.get('/:productId', getProductById)
router.get('/', getAllProducts)
// router.use(reqAuth)
router.post('/', createProduct)
router.delete('/:productId', deleteProduct)
router.put('/:productId', updateProduct)


module.exports = router;