const axios = require("axios");
const constants = require("./utils/constants");

async function getAddressByCep(cep) {
    try {
        const options = {
            url: constants.BASE_URL,
            method: "GET",
            params: {
                cep
            }
        };

        const response = await axios.request(options);

        return response.data;
    } catch (error) {
        return; 
    }
}

module.exports =  { getAddressByCep };