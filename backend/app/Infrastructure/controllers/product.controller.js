const db = require("../../Domaine/models");
const Product = db.product;
const User = db.user;
const UserService = require("../../Domaine/services/user.service");
const ProductService = require("../../Domaine/services/product.service");

exports.getAllProduct = async (req, res) => {
    
    const products = await Product.findAll();

    res.status(200).send(products);
};

exports.getProduct = async (req, res) => {
    
    //Rechercher l'utilisateur
    var userId = +req.params.idUser;
    const user = await UserService.getOneUser(userId);

    //Rechercher le produit
    var productId = +req.params.idProduct;
    const product = await ProductService.getOneProduct(productId);


    res.status(200).send(product);
};