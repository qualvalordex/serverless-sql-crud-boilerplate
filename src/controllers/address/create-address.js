const address = require("../../providers/address/add-address");

async function createAddress(event) {
    try {
        const { cep } = JSON.parse(event.body);

        const res = await address.addAddress(cep);
        
        return res;
    } catch (error) {
        return {
            status_code: 500,
            message: "Internal server error."
        };
    }
}

module.exports = { createAddress };