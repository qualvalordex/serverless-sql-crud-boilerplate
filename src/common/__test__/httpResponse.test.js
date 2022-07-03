const sut = require("../httpResponse");

describe("Módulo de respostas HTTP para API Gateway.", () => {
    it("OK - Deve retornar um JSON com status code 200 e um body convertido para string.", () => {
        const content = {
            bar: "foo",
            foo: "bar"
        };

        const result = sut.OK(content);

        expect(result.statusCode).toBe(200);
        expect(typeof result.body).toBe("string");
        expect(JSON.parse(result.body)).toStrictEqual(content);
        expect(Object.keys(result)).toEqual(["statusCode", "body"]);
    });

    it("CREATED - Deve retornar um JSON com status code 201 e um body convertido para string, com o body passado na função.", () => {
        const content = {
            bar: "foo",
            foo: "bar"
        };

        const result = sut.created(content);

        expect(result.statusCode).toBe(201);
        expect(typeof result.body).toBe("string");
        expect(JSON.parse(result.body)).toStrictEqual(content);
        expect(Object.keys(result)).toEqual(["statusCode", "body"]);
    });

    it("BAD REQUEST - Deve retornar um JSON com status code 400 e um body convertido para string, com a mensagem passada na função.", () => {
        const message = "Bad Request..."

        const result = sut.badRequest(message);

        expect(result.statusCode).toBe(400);
        expect(typeof result.body).toBe("string");
        expect(JSON.parse(result.body).message).toBe(message);
        expect(Object.keys(result)).toEqual(["statusCode", "body"]);
    });

    it("NOT FOUND - Deve retornar um JSON com status code 404 e um body convertido para string, com a mensagem passada na função.", () => {
        const message = "Not Found..."

        const result = sut.notFound(message);

        expect(result.statusCode).toBe(404);
        expect(typeof result.body).toBe("string");
        expect(JSON.parse(result.body).message).toBe(message);
        expect(Object.keys(result)).toEqual(["statusCode", "body"]);
    });

    it("CONFLICT - Deve retornar um JSON com status code 409 e um body convertido para string, com a mensagem passada na função.", () => {
        const message = "Conflict..."

        const result = sut.conflict(message);

        expect(result.statusCode).toBe(409);
        expect(typeof result.body).toBe("string");
        expect(JSON.parse(result.body).message).toBe(message);
        expect(Object.keys(result)).toEqual(["statusCode", "body"]);
    });

    it("UNPROCESSABLE ENTITY - Deve retornar um JSON com status code 422 e um body convertido para string, com a mensagem passada na função.", () => {
        const message = "Unprocessable Entity..."

        const result = sut.unprocessableEntity(message);

        expect(result.statusCode).toBe(422);
        expect(typeof result.body).toBe("string");
        expect(JSON.parse(result.body).message).toBe(message);
        expect(Object.keys(result)).toEqual(["statusCode", "body"]);
    });

    it("SERVER ERROR - Deve retornar um JSON com status code 500 e um body convertido para string, com a mensagem passada na função.", () => {
        const message = "Internal Server Error..."

        const result = sut.serverError(message);

        expect(result.statusCode).toBe(500);
        expect(typeof result.body).toBe("string");
        expect(JSON.parse(result.body).message).toBe(message);
        expect(Object.keys(result)).toEqual(["statusCode", "body"]);
    });

    it("GENERIC RESPONSE - Deve retornar um JSON com status code informado e um body convertido para string, com a mensagem passada na função.", () => {
        const code = 204
        const message = "No Content..."

        const result = sut.genericResponse(code, message);

        expect(result.statusCode).toBe(code);
        expect(typeof result.body).toBe("string");
        expect(JSON.parse(result.body).message).toBe(message);
        expect(Object.keys(result)).toEqual(["statusCode", "body"]);
    });
});