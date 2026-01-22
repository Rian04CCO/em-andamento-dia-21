var express = require("express");
var router = express.Router();

var livrosController = require("../controllers/livrosController");

router.get("/listar", function (req, res) {
    livrosController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    livrosController.cadastrar(req, res);
});

router.put("/editar/:id", function (req, res) {
    livrosController.editar(req, res);
});

router.get("/quantidade", function(req, res) {
    livrosController.qtdLivro(req, res);
});

module.exports = router;