const db = require("../../models");
const httpResponse = require("../../common/httpResponse");
const errorHandler = require("../../common/errorHandler");

const User = db.User;

async function removeUser(body) {
    try {
        const { email } = body;

        if(await User.findAll({ where: { email } }).length) {
            await User.destroy({ where: { email } });

            return httpResponse.OK({ message: "User removed." });
        } else {
            return httpResponse.notFound("User not found.");
        }
    } catch (error) {
        return errorHandler(error);
    }
}

module.exports = { removeUser };