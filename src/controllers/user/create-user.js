const user = require("../../providers/user/add-user");

async function createUser(event) {
    try {
        const body = JSON.parse(event.body);

        const res = await user.addUser(body);
        
        return res;
    } catch (error) {
        return {
            status_code: 500,
            message: "Internal server error."
        };
    }
}

module.exports = { createUser };