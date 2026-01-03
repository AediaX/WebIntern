// Variables to store values
let firstNumber = "";
let secondNumber = "";
let operator = "";
let display = document.getElementById("display");

// Function to input numbers
function inputNumber(number) {
    if (operator === "") {
        firstNumber += number;
        display.value = firstNumber;
    } else {
        secondNumber += number;
        display.value = secondNumber;
    }
}

// Function to set operator
function setOperator(op) {
    if (firstNumber === "") return;
    operator = op;
}

// Function to calculate result
function calculate() {
    let result;

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        result = num2 === 0 ? "Error" : num1 / num2;
    }

    display.value = result;

    // Reset values for next calculation
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
}

// Function to clear everything
function clearAll() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.value = "";
}
