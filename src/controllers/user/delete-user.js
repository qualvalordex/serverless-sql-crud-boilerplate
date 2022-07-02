const user = require("../../providers/user/remove-user");

async function deleteUser(event) {
    try {
        const body = JSON.parse(event.body);

        const res = await user.removeUser(body);
        
        return res;
    } catch (error) {
        return {
            status_code: 500,
            message: "Internal server error."
        };
    }
}

module.exports = { deleteUser };