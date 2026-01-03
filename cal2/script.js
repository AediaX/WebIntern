let current = "";
let previous = "";
let operator = null;

const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

// Add number or decimal
function addNumber(number) {
    if (number === "." && current.includes(".")) return;
    current += number;
    updateDisplay();
}

// Choose operator
function chooseOperator(op) {
    if (current === "") return;
    if (previous !== "") calculate();
    operator = op;
    previous = current;
    current = "";
    updateDisplay();
}

// Main calculation logic
function calculate() {
    let result;
    const prev = parseFloat(previous);
    const curr = parseFloat(current);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = curr === 0 ? "Error" : prev / curr;
            break;
        default:
            return;
    }

    current = result.toString();
    operator = null;
    previous = "";
    updateDisplay();
}

// Clear all
function clearAll() {
    current = "";
    previous = "";
    operator = null;
    updateDisplay();
}

// Delete last digit
function deleteLast() {
    current = current.slice(0, -1);
    updateDisplay();
}

// Percentage
function percentage() {
    if (current === "") return;
    current = (parseFloat(current) / 100).toString();
    updateDisplay();
}

// Toggle +/-
function toggleSign() {
    if (current === "") return;
    current = (parseFloat(current) * -1).toString();
    updateDisplay();
}

// Update screen
function updateDisplay() {
    currentDisplay.innerText = current || "0";
    previousDisplay.innerText = operator ? `${previous} ${operator}` : "";
}

/* Keyboard support */
document.addEventListener("keydown", e => {
    if (!isNaN(e.key) || e.key === ".") addNumber(e.key);
    if (["+", "-", "*", "/"].includes(e.key)) chooseOperator(e.key);
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") deleteLast();
    if (e.key === "Escape") clearAll();
});
