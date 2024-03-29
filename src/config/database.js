require("dotenv").config()
module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        schema: process.env.DB_SCHEMA,
        ssl: true,
        dialectOptions: {
            bigNumberStrings: true,
            timezone: "Asia/Bangkok",
        },
        timestamp: true,
        timezone: "Asia/Bangkok",
        logging: false,
    },
    test: {
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME,
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql",
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        schema: process.env.DB_SCHEMA,
        ssl: true,
        dialectOptions: {
            bigNumberStrings: true,
            timezone: "+00:00",
        },
        define: {
            schema: "onlineMarketDB",
        },
        searchPath: "onlineMarketDB",
        timestamp: true,
        timezone: "+00:00",
        logging: false,
    },
}
