const conexion = require("../database/db");

exports.save = (req, res) => {
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  console.log(nombre + " - " + descripcion);
  conexion.query(
    "INSERT INTO ciudad SET ?",
    { nombre: nombre, descripcion: descripcion },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/listciudad");
      }
    }
  );
};

exports.update = (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  conexion.query(
    "UPDATE ciudad SET ? WHERE id = ?",
    [{ nombre: nombre, descripcion: descripcion }, id],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/listciudad");
      }
    }
  );
};
