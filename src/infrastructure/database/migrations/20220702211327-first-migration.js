"use strict";

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable("users", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            street_name: {
                type: Sequelize.DataTypes.STRING,
            },
            district: {
                type: Sequelize.DataTypes.STRING
            },
            city: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            state: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            postal_code: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            }
        });
    },

    async down (queryInterface) {
        return queryInterface.dropTable("users");
    }
};
