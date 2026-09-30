const Product = require ('../models/productModel');
const mongoose = require('mongoose');

const createProduct = async(req, res)=>{
    try{
        // const user_id = req.user_id
        const newProduct = await Product.create({...req.body}); 
        res.status(201).json(newProduct)       
        // const product = await Product.create(newProduct)
       
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).sort ({ created: 1});
        res.status (200).json (products);
    } catch (error) {
        res.status (500).json ({message: "Failed to retrieve books"});
    }
};


module.exports = {createProduct, getAllProducts}