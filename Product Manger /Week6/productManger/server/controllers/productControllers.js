const Product = require(`../models/productModels`)

module.exports = {
    createProducts: (req,res)=>{
        Product.create(req.body)
            .then((newProduct)=>{
                res.status(400).json(newProduct)
            })
            .catch ((err)=>{
                res.status(400).json(err)
            });
    }
};