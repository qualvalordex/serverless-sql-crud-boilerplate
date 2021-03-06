const Sequelize = require("sequelize");
const config = require("../infrastructure/database/config/config")[process.env.NODE_ENV || "loc"];

console.log(config);

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);

const User = require("./user")(sequelize, Sequelize.DataTypes);

module.exports = { User };