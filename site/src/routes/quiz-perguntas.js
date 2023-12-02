var express = require("express");
var router = express.Router();


var quizController = require("../controllers/quiz-perguntasController");

router.post("/cadastrar", function (req, res) {
    
    quizController.cadastrar(req, res);
});

module.exports = router;