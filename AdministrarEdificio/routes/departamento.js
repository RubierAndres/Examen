const { Router } = require("express");
const express = require("express");
const router = express.Router();

const conexion = require("../database/db");

router.get("/listdepa", (req, res) => {
  conexion.query("SELECT * FROM departamento", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("listdepa", { results: results });
    }
  });
});

//RUTA PARA CREAR REGISTROS DE CLIENTES
router.get("/createdepa", (req, res) => {
  res.render("createdepa");
});

//RUTA PARA EDITAR REGISTROS DE CLIENTES
router.get("/editdepa/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM departamento WHERE id=?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render("editdepa", { nombre: results[0] });
      }
    }
  );
});

//RUTA PARA ELIMINAR REGISTRO CLIENTE
router.get("/deleteclient/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "DELETE FROM departamento WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.redirect("/listdepa");
      }
    }
  );
});

const crudclient = require("../controllers/crudDepa");

router.post("/saveclient", crudclient.saveclient);
router.post("/updateClient", crudclient.updateClient);
module.exports = router;
