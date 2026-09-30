const Product = require('../models/productModel');
const mongoose = require('mongoose');

const createProduct = async (req, res) => {
    try {
        const user_id = req.user_id
        const newProduct = await Product.create({ ...req.body , user_id});
        res.status(201).json(newProduct)
        // const product = await Product.create(newProduct)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).sort({ created: 1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve books" });
    }
};

const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(404).json({ message: "Invalid product ID" })
    }
    try {
        const deletedProduct = await Product.findOneAndDelete({ _id: productId })
        if (deletedProduct) {

            res.sendStatus(204)
        } else {
            res.status(404).json({ message: "Product id not found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to delete book" })
    }
}

const getProductById = async (req, res) => {
    const {productId} = req.params;

    if (!mongoose.Types.ObjectId.isValid (productId)) {
        return res.status (404).json ({message: "Invalid product ID"});
    } try {
        const product = await Product.findById(productId);

        if (product) {
            res.status (200).json(product);
        } else {
            res.status (404).json ({message: "product doesn't exist"})
        }
    } catch (error) {
        res.status (500).json ({message: "Failed to retrieve product"})
    }
};


const updateProduct = async(req, res) =>{
const {productId} = req.params;
if (!mongoose.Types.ObjectId.isValid(productId)){
    return res.status(404).json({message: "Invalid Product ID"});
}
try{
    const updatedProduct = await Product.findOneAndUpdate({_id: productId}, {...req.body}, {returnDocument:'after'});
    if(updatedProduct){
        res.status(200).json(updatedProduct)
    }else{
        res.status(404).json({message: "product not found"})
    }
}catch(error){
    res.status(500).json({message: "Failed to update Product"})
}
}


module.exports = { createProduct, getAllProducts, deleteProduct, getProductById, updateProduct }