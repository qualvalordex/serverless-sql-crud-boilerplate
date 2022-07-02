const db = require("../../models");
const httpResponse = require("../../common/httpResponse");
const errorHandler = require("../../common/errorHandler");

const User = db.User;

async function changeUser(body) {
    try {
        const { email } = body;

        if(await User.findAll({ where: { email } }).length) {
            await User.update(body, {
                where: { email }
            });

            const newUser = await User.findAll({ where: { email } });

            return httpResponse.OK(newUser);
        } else {
            return httpResponse.notFound("User not found.");
        }
    } catch (error) {
        return errorHandler(error);
    }
}

module.exports = { changeUser };