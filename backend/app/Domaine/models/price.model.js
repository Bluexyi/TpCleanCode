module.exports = (sequelize, Sequelize) => {
    const Price = sequelize.define("prices", {
      price: {
        type: Sequelize.FLOAT
      }
    });
  
    return Price;
  };