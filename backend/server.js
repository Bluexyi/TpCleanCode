const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();



const db = require("./app/Domaine/models");

const User = db.user;
const Product = db.product;
const Price = db.price;

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Examen Clean Architecture" });
});

// routes
require('./app/Infrastructure/routes/user.routes')(app);
require('./app/Infrastructure/routes/product.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    User.create({
        id: 1,
        name: "Jean",
        login: true
    });

    User.create({
        id: 2,
        name: "Paul",
        login: false
    });

    Product.create({
        id: 1,
        name: "Table basse",
        description: "Belle table basse",
        category: "Meuble",
        details:"{}"
    });

    Product.create({
        id: 2,
        name: "Robot cuisine",
        description: "Tres utile",
        category: "Electromenager",
        details:"{}"
    });

    Price.create({
        id: 1,
        price: 4.3,
        idProduct: 1
    });

    Price.create({
        id: 2,
        price: 5.6,
        idProduct: 2
    });
}