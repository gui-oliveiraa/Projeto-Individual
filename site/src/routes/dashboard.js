var express = require("express");
var router = express.Router();

var DashboardController = require("../controllers/dashboardController");


router.get("/listarGenero", function (req, res) {
    
    DashboardController.QtdCadaGenero(req, res);
});

router.get("/listarMedia", function (req, res) {
   
    DashboardController.pontuacaoMedia(req, res);
});

module.exports = router;