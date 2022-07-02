const db = require("../../models");
const httpResponse = require("../../common/httpResponse");
const errorHandler = require("../../common/errorHandler");

const User = db.User;

async function retrieveUser({ email }) {
    try {
        const user = await User.findAll({
            where: {
                email
            }
        });

        if (user.length) {
            return httpResponse.OK(user);
        } else {
            console.log("ENTROU AQUIIIII");
            return httpResponse.notFound("User not found.");
        }
    } catch (error) {
        return errorHandler(error);
    }
}

module.exports = { retrieveUser };