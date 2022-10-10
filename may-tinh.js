function Addition() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) + Number (number2);
    document.getElementById("result").innerHTML = result;
}

function Subtraction() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result =Number (number1) - Number (number2);
    document.getElementById("result").innerHTML = result;
}

function Multiplaycation() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result =Number (number1) * Number (number2);
    document.getElementById("result").innerHTML = result;
}

function Division() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result =Number (number1) /Number (number2);
    document.getElementById("result").innerHTML = result;
}

