const conexion = require("../database/db");
exports.savetransac = (req, res) => {
  const tipoTransaccion = req.body.tipoTransaccion;
  const monto = req.body.monto;
  const descripcion = req.body.descripcion;
  const idCuentaId = req.body.idCuentaId;
  conexion.query(
    "INSERT INTO edificio SET ?",
    {
      tipoTransaccion: tipoTransaccion,
      monto: monto,
      descripcion: descripcion,
      idCuentaId: idCuentaId,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/listedif");
      }
    }
  );
};

exports.updatetransac = (req, res) => {
  const id = req.body.id;
  const tipoTransaccion = req.body.tipoTransaccion;
  const monto = req.body.monto;
  const descripcion = req.body.descripcion;
  const idCuentaId = req.body.idCuentaId;
  conexion.query(
    "UPDATE edificio SET ? WHERE id = ?",
    [
      {
        tipoTransaccion: tipoTransaccion,
        monto: monto,
        descripcion: descripcion,
        idCuentaId: idCuentaId,
      },
      id,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/listedif");
      }
    }
  );
};
