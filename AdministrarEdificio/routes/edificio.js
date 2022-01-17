const { Router } = require("express");
const express = require("express");
const router = express.Router();

const conexion = require("../database/db");

router.get("/listedif", (req, res) => {
  conexion.query("SELECT * FROM edificio", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("listedif", { results: results });
    }
  });
});

router.get("/createedif", (req, res) => {
  conexion.query("SELECT * FROM inquilino", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("createedif", { results: results });
    }
  });
});

//RUTA PARA EDITAR REGISTROS DE CLIENTES
router.get("/editedif/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM edificio WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        conexion.query("SELECT * FROM inquilino", (error, resul) => {
          if (error) {
            throw error;
          } else {
            res.render("editedif", {
              tipoTransaccion: results[0],
              resul: resul,
            });
          }
        });
      }
    }
  );
});

//RUTA PARA ELIMINAR REGISTRO CLIENTE

router.get("/deletetransac/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "DELETE FROM edificio WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.redirect("/listedif");
      }
    }
  );
});

const crudtransac = require("../controllers/crudEdificio");

router.post("/savetransac", crudtransac.savetransac);
router.post("/updatetransac", crudtransac.updatetransac);
module.exports = router;
