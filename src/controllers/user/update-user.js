const user = require("../../providers/user/change-user");

async function updateUser(event) {
    try {
        const body = JSON.parse(event.body);

        const res = await user.changeUser(body);
        
        return res;
    } catch (error) {
        return {
            status_code: 500,
            message: "Internal server error."
        };
    }
}

module.exports = { updateUser };