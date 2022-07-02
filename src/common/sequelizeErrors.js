const httpResponse = require("./httpResponse");

module.exports = {
    "SequelizeValidationError": (error) => {
        return httpResponse.badRequest(error.message);
    }
};