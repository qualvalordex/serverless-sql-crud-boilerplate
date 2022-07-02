const Sequelize = require("sequelize");
const config = require("../infra/database/config/config")[process.env.NODE_ENV || "loc"];

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

const Address = require("./address")(sequelize, Sequelize.DataTypes);

module.exports = { Address };