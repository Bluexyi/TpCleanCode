const controller = require("../controllers/user.controller");
const service = require("../../Domaine/services/user.service");
const repository = require("../repository/user.repository");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user/:id", controller.getUser,service.getOneUser);
  app.get("/api/user", controller.getAllUsers,service.getAllUsers, repository.findAll);
  app.put("/api/user/:id/login", controller.login);
  
};
