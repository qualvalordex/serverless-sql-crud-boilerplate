const db = require("../../models");
const client = require("../../clients/cep-blds-tools");
const httpResponse = require("../../common/httpResponse");

const Address = db.Address;

async function addAddress(cep) {
    try {
        const res = await client.getAddressByCep(cep);
        
        if (res.code != 200) return httpResponse.genericResponse(res.code, res.message);

        const address = {
            street_name: res.result.logradouro,
            district: res.result.bairro,
            city: res.result.localidade,
            state: res.result.uf,
            postal_code: res.result.cep
        };

        const newAddress = await Address.create(address);
        
        return httpResponse.created(newAddress); 
    } catch (error) {
        console.log(error);
        return httpResponse.serverError(error.message);
    }
}

module.exports = { addAddress };