const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {type:String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    inventoryCount: {type: String, required: true},
    supplier:{
        name: {type: String, required: true},
        contactEmail: {type: String, required: true, unique: true},
        contactPhone: {type: String, required: true},
        isVerified: {type: Boolean, required: true}
    }
},
{timestamps: true}
);

productSchema.set('toJSON',{
    virtuals: true,
    transform: (doc, ret) =>{
        ret.id = ret._id;
        return ret;
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;