const Product = require('../models/ProductModel');


// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (err) {
        res.json({ message: err });
    }
}

//create product
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const result = await product.save();
        res.json(result);

        // console.log("Product created successfully",result);
    }
    catch (err) {
        res.json({ message: err });
    }
}

//get product by id
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    }
    catch (err) {
        res.json({ message: err });
    }
}



module.exports = {
    getProducts,
    getProductById,
    createProduct
}