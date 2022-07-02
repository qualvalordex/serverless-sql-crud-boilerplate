const httpResponse = require("./httpResponse");
const sequelizeErrors = require("./sequelizeErrors");

function errorHandler(error) {
    if (Object.keys(sequelizeErrors).includes(error.name)) {
        return sequelizeErrors[error.name](error);
    }

    return httpResponse.serverError(error.message);
}

module.exports = errorHandler;