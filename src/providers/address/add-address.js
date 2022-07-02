const client = require("../../clients/cep-blds-tools");
const httpResponse = require("../../common/httpResponse");

async function addAddress(cep) {
    try {
        const res = await client.getAddressByCep(cep);
        
        if (res.code != 200) return httpResponse.genericResponse(res.code, res.message);

        return httpResponse.OK({
            street_name: res.result.logradouro,
            district: res.result.bairro,
            city: res.result.localidade,
            state: res.result.uf,
            cep: res.result.cep
        }); 
    } catch (error) {
        console.log(error);
        return {
            status_code: 500,
            message: "Internal server error."
        };
    }
}

module.exports = { addAddress };