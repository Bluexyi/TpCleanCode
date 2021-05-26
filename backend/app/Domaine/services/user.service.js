const db = require("../models");
const repository = require("../../Infrastructure/repository/user.repository");
const User = db.user;

exports.getOneUser = async (id) => {

   return await repository.findOneById(id);

    
};

exports.getAllUsers = async (req, res, next) => {
    
    next();
};