const { Router } = require("express");
const express = require("express");
const router = express.Router();

const conexion = require("../database/db");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/listciudad", (req, res) => {
  conexion.query("SELECT * FROM ciudad", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("listciudad", { results: results });
    }
  });
});

//RUTA PARA CREAR RESGISTROS DE BANCOS
router.get("/createciudad", (req, res) => {
  res.render("createciudad");
});

//RUTAS PARA EDITAR RESGISTROS DE BANCOS
router.get("/editciudad/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("SELECT * FROM ciudad WHERE id=?", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("editciudad", { nombre: results[0] });
    }
  });
});

//RUTA PARA ELIMINAR REGISTRO BANCO
router.get("/deleteciudad/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("DELETE FROM ciudad WHERE id = ?", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.redirect("/listciudad");
    }
  });
});

const crud = require("../controllers/crudCiudad");

router.post("/save", crud.save);
router.post("/update", crud.update);
module.exports = router;
