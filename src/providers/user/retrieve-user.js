const db = require("../../models");
const httpResponse = require("../../common/httpResponse");

const User = db.User;

async function retrieveUser({ email }) {
    try {
        const user = await User.findAll({
            where: {
                email
            }
        });

        if (user) {
            return httpResponse.OK(user);
        } else {
            return httpResponse.notFound("Your search failed. Please verify your request and try again.");
        }
    } catch (error) {
        console.log(error);
        return httpResponse.serverError(error.message);
    }
}

module.exports = { retrieveUser };