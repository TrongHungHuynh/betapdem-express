var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res)=> {
  const firstNumber = parseFloat(req.document.getElementById('firstNumber').value);
  const secondNumber = parseFloat(req.document.getElementById('secondNumber').value);
  const operators = req.document.getElementsByName('operation');
  let result;
  for (let i = 0; i < operators.length; i++) {
    if (operators[i].checked) {
      const operator = operators[i].value;
      if (operator == 'add')
        result = firstNumber + secondNumber;
      else if (operator == 'subtract')
        result = firstNumber - secondNumber;
      else if (operator == 'multiple')
        result = firstNumber * secondNumber;
      else if (operator == 'divide')
        result = firstNumber / secondNumber;
    }
  }
  res.render('index', { title: 'Express', firstNumber, secondNumber, operators, result });
});

module.exports = router;
