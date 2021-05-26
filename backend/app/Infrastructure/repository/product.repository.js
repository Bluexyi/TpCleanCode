const db = require("../../Domaine/models");
const Product = db.product;


exports.findOneById = async (id) => {
    
    const product = await Product.findByPk(id);

    return await product;
};