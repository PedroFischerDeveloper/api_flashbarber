// configuração inicial do servidor
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("express-flash");
const cookieParser = require('cookie-parser');


// models 
const Attend = require('./Attend/Attend');

// database connection
const connection = require('./database/database');

//controllers
const AttendController = require("./Attend/AttendController");
const userController = require("./user/userController");
const hourController = require("./hours/hourCrontroller");

// view engine 
app.set("view engine", "ejs");

//body parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//database connection
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    }).catch((error) => {
        console.log(error)
    });

//controllers
app.use("/", userController);
app.use("/", hourController);
app.use("/", AttendController);

app.listen(8080, () => {
    console.log("servidor online");
});