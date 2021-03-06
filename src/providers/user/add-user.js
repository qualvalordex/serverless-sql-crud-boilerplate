const db = require("../../models");
const client = require("../../clients/cep-blds-tools");
const httpResponse = require("../../common/httpResponse");
const errorHandler = require("../../common/errorHandler");

const User = db.User;

async function addUser({ email, cep }) {
    try {
        const res = await client.getAddressByCep(cep);
        
        if (res.code != 200) return httpResponse.genericResponse(res.code, res.message);

        const user = {
            email,
            street_name: res.result.logradouro,
            district: res.result.bairro,
            city: res.result.localidade,
            state: res.result.uf,
            postal_code: res.result.cep
        };

        const newUser = await User.create(user);
        
        return httpResponse.created(newUser); 
    } catch (error) {
        return errorHandler(error);
    }
}

module.exports = { addUser };