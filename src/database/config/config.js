const globalConstants = require("../../const/globalConstants");

module.exports =
{
  "development": {
    "username": globalConstants.DB_USUARIO,
    "password": globalConstants.DB_PASSWORD,
    "database": globalConstants.DB_NOMBRE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
