const previousOperandText = document.querySelector("[data-previous]");
const currentOperandText = document.querySelector("[data-current]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const acButton = document.querySelector("[data-ac]");
const delButton = document.querySelector("[data-delete]");
const percentButton = document.querySelector("[data-percent]");

// Initialize variables for calculator logic
let currentOperand = "";
let previousOperand = "";
let operation = "";
let justComputed = false; // Flag to clear current input after a computation
let constantClicked = false; // Flag to lock constant value

// Select and initialize the constant buttons' values
const constantButton = document.querySelectorAll("[data-constant]");

document.getElementById("eulerButton").value = String(Math.E);
document.getElementById("piButton").value = String(Math.PI);
document.getElementById("goldenButton").value = String((1 + Math.sqrt(5)) / 2);

// Handle number button clicks
for (let button of numberButtons) {
    button.addEventListener("click", () => {
        // Clear currentOperand if a new number is entered after computing
        // Also prevent number input if constant is clicked
        if (justComputed || constantClicked) {
            currentOperand = "";
            justComputed = false;
            constantClicked = false;
        }

        // Prevent multiple decimals
        const number = button.value;
        if (number === "." && currentOperand.includes(".")) return;

        currentOperand += number;
        updateDisplay();
    });
}

// Handle constant button clicks
for (let constant of constantButton) {
    constant.addEventListener("click", () => {
        currentOperand = constant.value; // Replace currentOperand with constant value
        justComputed = false;
        constantClicked = true;
        updateDisplay();
    });
}

// Handle operator button clicks (+, −, ×, ÷, =)
for (let button of operatorButtons) {
    button.addEventListener("click", () => {
        if (button.value === "=") {
            compute(); // Perform calculation
            justComputed = true; // Set flag to clear input on next number entry
        } else {
            chooseOperation(button.value); // Store selected operation
        }
    });
}

// Add event listeners for clear, delete, and percent buttons
acButton.addEventListener("click", clear);
delButton.addEventListener("click", deleteLast);
percentButton.addEventListener("click", percent);

// Update display with current and previous operands
function updateDisplay() {
    currentOperandText.textContent = currentOperand;
    previousOperandText.textContent = previousOperand + operation;
}

// Handle operator selection
function chooseOperation(op) {
    if (currentOperand === "") return;

    // If already has a previous operand, compute the result first
    if (previousOperand !== "") {
        compute();
    } else {
        operation = op;
        previousOperand = currentOperand;
        currentOperand = "";
        updateDisplay();
    }
}

// Perform computation based on the current operation
function compute() {
    let result;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(previous) || isNaN(current)) return;

    // Handle operations
    if (operation === " + ") {
        result = previous + current;
    } else if (operation === " - ") {
        result = previous - current;
    } else if (operation === " × ") {
        result = previous * current;
    } else if (operation === " ÷ ") {
        result = current === 0 ? Infinity : previous / current;
    } else {
        return;
    }

    // Update state with result
    currentOperand = String(result);
    previousOperand = "";
    operation = "";
    updateDisplay();
}

// Clear all input and reset state
function clear() {
    currentOperand = "";
    previousOperand = "";
    operation = "";
    updateDisplay();
}

// Delete last character from currentOperand
function deleteLast() {
    if (currentOperand === "") return;

    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
}

// Convert currentOperand to percentage
function percent() {
    if (currentOperand === "") return;

    currentOperand = String(parseFloat(currentOperand) / 100);
    updateDisplay();
}
