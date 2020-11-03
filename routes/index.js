var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res)=> {
  const firstNumber = parseFloat(req.body.firstNumber);
  const secondNumber = parseFloat(req.body.secondNumber);
  const operators = req.body.operation;
  let result;
  for (let i = 0; i < operators.length; i++) {
    if (operators[i].checked) {
      const operator = operators[i];
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
