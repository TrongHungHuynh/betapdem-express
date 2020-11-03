function checkFunction() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    if (firstNumber.length == 0) {
        document.getElementById("warning").innerHTML = "Chưa nhập số thứ nhất."
        return false;
    } else if (isNaN(parseFloat(firstNumber))) {
        document.getElementById("warning").innerHTML = "Số thứ nhất không phải là số thực."
        return false;
    }

    if (secondNumber.length == 0) {
        document.getElementById("warning").innerHTML = "Chưa nhập số thứ hai."
        return false;
    } else if (isNaN(parseFloat(secondNumber))) {
        document.getElementById("warning").innerHTML = "Số thứ hai không phải là số thực."
        return false;
    }
    document.getElementById("warning").innerHTML = ""
    return true;
}

function calculate() {
    if (checkFunction() == false) {
        return false;
    }
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const operators = document.getElementsByName('operation');
    let result;

    while (true) {
        let count = 0;
        for (let i = 0; i < operators.length; i++) {
            if (operators[i].checked) {
                count++;
            }
        }
        if (count != 1) {
            document.getElementById("warning").innerHTML = "Chưa chọn phép tính."
            return false;
        }
        document.getElementById("warning").innerHTML = ""
        break;
    }

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
    document.getElementById("result").innerHTML = result.toString();
}