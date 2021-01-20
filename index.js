// configuração inicial do servidor
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// database connection
const connection = require('./database/database');

//admin/controllers
const AttendController = require("./Admin/attend/AttendController");
const hourController = require("./Admin/hours/hourCrontroller");

//front/controllers
const homeController = require("./Front/home/homeController");


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
app.use("/", hourController);
app.use("/", AttendController);
app.use("/atendimento/", homeController);

app.listen(8080, () => {
    console.log("servidor online");
});