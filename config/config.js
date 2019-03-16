require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.name,
    "password": process.env.password,
    "database": process.env.database,
    "host": process.env.host,
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }
}
