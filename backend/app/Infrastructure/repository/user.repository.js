const db = require("../../Domaine/models");
const User = db.user;

/*exports.findOneById = function find(id){
    User.findByPk(id).then(user => {
        return user;
    })
    console.log(user);
    
}*/

exports.findOneById = async (id) => {
    
    const user = await User.findByPk(id);

    return await user;
};

exports.findAll = async (req, res) => {
    
    const users = await User.findAll();

    res.status(200).send(users);
};