const conexion = require("../database/db");
exports.savecount = (req, res) => {
  const propietario = req.body.propietario;
  const numero = req.body.numero;
  const tipodeCuenta = req.body.tipodeCuenta;
  const idBancoId = req.body.idBancoId;
  const idClienteId = req.body.idClienteId;
  conexion.query(
    "INSERT INTO inquilino SET ?",
    {
      propietario: propietario,
      numero: numero,
      tipodeCuenta: tipodeCuenta,
      idBancoId: idBancoId,
      idClienteId: idClienteId,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/listinqui");
      }
    }
  );
};

exports.updatecount = (req, res) => {
  const id = req.body.id;
  const propietario = req.body.propietario;
  const numero = req.body.numero;
  const tipodeCuenta = req.body.tipodeCuenta;
  const idBancoId = req.body.idBancoId;
  const idClienteId = req.body.idClienteId;
  conexion.query(
    "UPDATE inquilino SET ? WHERE id = ?",
    [
      {
        propietario: propietario,
        numero: numero,
        tipodeCuenta: tipodeCuenta,
        idBancoId: idBancoId,
        idClienteId: idClienteId,
      },
      id,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/listinqui");
      }
    }
  );
};
