const Sequelize = require("sequelize");
const connection = require("../database/database");

const Hour = require("./Hour");

const Attend = connection.define('attend', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    }, 
    deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});


Hour.hasMany(Attend);

//Attend.sync({force: true});

module.exports = Attend;