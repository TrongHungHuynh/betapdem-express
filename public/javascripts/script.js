function checkFunction() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;

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

function checkOperator() {
    if (checkFunction() == false) {
        return false;
    }

    const operators = document.getElementsByName('operation');
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
    return true;
}
