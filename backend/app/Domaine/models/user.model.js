module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      login: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return User;
  };