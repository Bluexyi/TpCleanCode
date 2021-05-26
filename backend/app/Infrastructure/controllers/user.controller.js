const db = require("../../Domaine/models");
const User = db.user;
const service = require("../../Domaine/services/user.service");

exports.getUser = async (req, res, next) => {
    var userId = +req.params.id;
    const user = await service.getOneUser(userId);

    res.send(user);
};

exports.getAllUsers = async (req, res, next) => {

    next();
};

exports.login = async (req, res) => {
    const userId = +req.params.id;
    const user = await service.update(userId);

    res.send(user);
 };