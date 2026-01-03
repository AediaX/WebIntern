// Get display input
let display = document.getElementById("display");

// Function to add numbers or operators
function add(value) {
    display.value = display.value + value;
}

// Function to clear display
function clearDisplay() {
    display.value = "";
}

// Function to calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
