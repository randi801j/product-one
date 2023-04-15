const ProductController = require("../controllers/productControllers");

module.exports = (app)=>{
    app.post("/api/products", ProductController.createProducts);
}