const { Router } = require("express");
const express = require("express");
const router = express.Router();

const conexion = require("../database/db");

router.get("/listinqui", (req, res) => {
  conexion.query("SELECT * FROM inquilino", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("listinqui", { results: results });
    }
  });
});

router.get("/createinqui", (req, res) => {
  conexion.query("SELECT * FROM ciudad", (error, results) => {
    if (error) {
      throw error;
    } else {
      conexion.query("SELECT * FROM departamento", (error, resul) => {
        if (error) {
          throw error;
        } else {
          res.render("createinqui", { results: results, resul: resul });
        }
      });
    }
  });
});

//RUTA PARA EDITAR REGISTROS DE CLIENTES
router.get("/editinqui/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("SELECT * FROM inquilino WHERE id=?", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      conexion.query("SELECT * FROM ciudad", (error, resul) => {
        if (error) {
          throw error;
        } else {
          conexion.query("SELECT * FROM departamento", (error, re) => {
            if (error) {
              throw error;
            } else {
              res.render("editinqui", {
                propietario: results[0],
                resul: resul,
                re: re,
              });
            }
          });
        }
      });
    }
  });
});

//RUTA PARA ELIMINAR REGISTRO CLIENTE

router.get("/deletecount/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("DELETE FROM inquilino WHERE id = ?", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.redirect("/listinqui");
    }
  });
});

const crudcount = require("../controllers/crudInquilino");
const { threadId } = require("../database/db");

router.post("/savecount", crudcount.savecount);
router.post("/updatecount", crudcount.updatecount);
module.exports = router;
