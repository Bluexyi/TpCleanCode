const { price } = require("../../Domaine/models");
const db = require("../../Domaine/models");
const Product = db.product;
const Price = db.price;


exports.findOneById = async (id) => {
    
    const product = await Product.findByPk(id);

    const price = await Price.findOne({
        where: {
          idProduct: product.id
        }
      })

    var result = {product: product, price:price}

    return await result;
};