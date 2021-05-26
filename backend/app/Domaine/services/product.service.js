const db = require("../models");
const repository = require("../../Infrastructure/repository/product.repository");
const Product = db.product;

exports.getOneProduct = async (id) => {

   return await repository.findOneById(id);

    
};
