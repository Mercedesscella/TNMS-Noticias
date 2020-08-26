module.exports = {
  "development": {
    "host": "localhost\SQLExpress",
    "username": "DESKTOP-LJE9D9\magri",  // pruebo otro usuario
    "password": null,
    "database": "tnms_noticias",
    //"host": "127.0.1.1",
    //"host": "192.168.100.1",
    //"host": "localhost",
    "dialect": "mssql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
