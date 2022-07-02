const sut = require("../errorHandler");

describe("Módulo de tratamento de erros do Sequelize.", () => {
    it("Deve retornar um JSON com status code 400 e mensagem de erro caso o Sequelize retorne o erro SequelizeValidationError.", () => {
        const error = {
            name: "SequelizeValidationError",
            message: "Erro de validação de parâmetro"
        };

        const result = sut(error);

        expect(Object.keys(result)).toEqual(["statusCode", "body"]);
        expect(Object.keys(JSON.parse(result.body))).toEqual(["message"]);
        expect(result.statusCode).toBe(400);
    });

    it("Deve retornar um JSON com status code 500 e mensagem de erro caso seja um erro não mapeado do Sequelize", () => {
        const error = {
            name: "ErroNãoMapeado",
            message: "Erro de validação de parâmetro"
        };

        const result = sut(error);

        expect(Object.keys(result)).toEqual(["statusCode", "body"]);
        expect(Object.keys(JSON.parse(result.body))).toEqual(["message"]);
        expect(result.statusCode).toBe(500);
    });
});