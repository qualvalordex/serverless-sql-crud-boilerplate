module.exports.OK = (content) => {
    return {
        statusCode: 200,
        body: JSON.stringify(content)
    };
};

module.exports.badRequest = (message) => {
    return {
        statusCode: 400,
        body: JSON.stringify({
            message
        })
    };
};

module.exports.notFound = (message) => {
    return {
        statusCode: 404,
        body: JSON.stringify({
            message
        })
    };
};

module.exports.conflict = (message) => {
    return {
        statusCode: 409,
        body: JSON.stringify({
            message
        })
    };
};

module.exports.unprocessableEntity = (message) => {
    return {
        statusCode: 422,
        body: JSON.stringify({
            message
        })
    };
};

module.exports.serverError = (message) => {
    return {
        statusCode: 500,
        body: JSON.stringify({
            message
        })
    };
};

module.exports.genericResponse = (code, message) => {
    return {
        statusCode: code,
        body: JSON.stringify({ message })
    };
};