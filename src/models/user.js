module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define("user", {
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: 1,
                    msg: "Empty e-mail."
                }
            }
        },
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

    return User;
};