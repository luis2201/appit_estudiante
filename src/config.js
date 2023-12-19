require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },

    mysql: {
        host: process.env.MYSQL_HOST || "localhost",
        user: process.env.MYSQL_USER || "itsup_aplicativo",
        password: process.env.MYSQL_PASSWORD || "@appit$itsup]icep.",
        database: process.env.MYSQL_DB || "itsup_aplicativo"
    }
}