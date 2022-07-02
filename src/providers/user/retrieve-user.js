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

        if (user.length) {
            return httpResponse.OK(user);
        } else {
            console.log("ENTROU AQUIIIII");
            return httpResponse.notFound("User not found.");
        }
    } catch (error) {
        console.log(error);
        return httpResponse.serverError(error.message);
    }
}

module.exports = { retrieveUser };