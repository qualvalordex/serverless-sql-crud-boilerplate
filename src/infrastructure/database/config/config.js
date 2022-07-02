module.exports = {
    loc: {
        username: "root",
        password: "root",
        database: "my-database",
        host: "sls-database",
        dialect: "mysql"
    },
    prd: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
};
