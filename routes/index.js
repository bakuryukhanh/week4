var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    var number1 = "",
        number2 = "",
        result = "";

    res.render("index", number1, number2, result);
});

router.post("/", (req, res) => {
    const number1 = parseFloat(req.body.firstNum);
    const number2 = parseFloat(req.body.secondNum);
    const cal = req.body.cal;
    var result = "";
    switch (cal) {
        case "Add":
            result = number1 + number2;
            break;
        case "Subtract":
            result = number1 - number2;
            break;
        case "Multi":
            result = number1 * number2;
            break;
        case "Divide":
            result = number1 / number2;
            break;
    }
    res.render("index", { number1, number2, cal, result });
});

module.exports = router;
