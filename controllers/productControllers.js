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


module.exports = {createProduct}