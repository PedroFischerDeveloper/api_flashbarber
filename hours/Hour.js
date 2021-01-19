const Sequelize = require("sequelize");
const connection = require("../database/database");

const Hour = connection.define('hour', {
    hour: {
        type: Sequelize.DATE,
        allowNull: true, 
        unique: true
    }
});

//Hour.sync({force: true});

module.exports = Hour;