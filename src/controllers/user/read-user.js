const user = require("../../providers/user/retrieve-user");

async function readUser(event) {
    try {
        const params = event.queryStringParameters;

        const res = await user.retrieveUser(params);
        
        return res;
    } catch (error) {
        return {
            status_code: 500,
            message: "Internal server error."
        };
    }
}

module.exports = { readUser };