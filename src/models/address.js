module.exports = (sequelize, dataTypes) => {
    const Address = sequelize.define("address", {
        street_name: {
            type: dataTypes.STRING,
        },
        district: {
            type: dataTypes.STRING,
        },
        city: {
            type: dataTypes.STRING,
            allowNull: false
        },
        state: {
            type: dataTypes.STRING,
            allowNull: false
        },
        postal_code: {
            type: dataTypes.STRING,
            allowNull: false
        }
    });

    return Address;
};