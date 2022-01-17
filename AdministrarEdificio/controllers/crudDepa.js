const conexion = require("../database/db");
exports.saveclient = (req, res) => {
  const nombre = req.body.nombre;
  const numero = req.body.numero;
  const tipo = req.body.tipo;
  const telefono = req.body.telefono;
  conexion.query(
    "INSERT INTO departamento SET ?",
    {
      nombre: nombre,
      numero: numero,
      tipo: tipo,
      telefono: telefono,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/listdepa");
      }
    }
  );
};

exports.updateClient = (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const numero = req.body.numero;
  const tipo = req.body.tipo;
  const telefono = req.body.telefono;
  conexion.query(
    "UPDATE departamento SET ? WHERE id = ?",
    [
      {
        nombre: nombre,
        numero: numero,
        tipo: tipo,
        telefono: telefono,
      },
      id,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/listdepa");
      }
    }
  );
};
