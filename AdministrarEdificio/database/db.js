const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "localhost",
  database: "edificio",
  user: "root",
  password: "",

});

conexion.connect((error) => {
  if (error) {
    console.error("El error de conexión es: " + error);
    return;
  }
  console.log("!Conectado a la BD MySQL¡");
});

module.exports = conexion;
