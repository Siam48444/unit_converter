const previousOperandText = document.querySelector("[data-previous]");
const currentOperandText = document.querySelector("[data-current]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const acButton = document.querySelector("[data-ac]");
const delButton = document.querySelector("[data-delete]");
const percentButton = document.querySelector("[data-percent]");

let currentOperand = "";
let previousOperand = "";
let operation = "";
let justComputed = false;

for (let button of numberButtons) {
    button.addEventListener("click", () => {
        if (justComputed) {
            currentOperand = "";
            justComputed = false;
        }
        if (button.textContent === "." && currentOperand.includes(".")) return;

        currentOperand += button.textContent;
        updateDisplay();
    });
}

for (let button of operatorButtons) {
    button.addEventListener("click", () => {
        if (button.value === "=") {
            compute();
            justComputed = true;
        } else {
            chooseOperation(button.value);
        }
    });
}

acButton.addEventListener("click", clear);
delButton.addEventListener("click", deleteLast);
percentButton.addEventListener("click", percent);

updateDisplay();
function updateDisplay() {
    currentOperandText.textContent = currentOperand;
    previousOperandText.textContent = previousOperand + operation;
}

function chooseOperation(op) {
    if (currentOperand === "") return;

    if (previousOperand !== "") {
        compute();
    } else {
        operation = op;
        previousOperand = currentOperand;
        currentOperand = "";
        updateDisplay();
    }
}

function compute() {
    let result;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(previous) || isNaN(current)) return;

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

    currentOperand = String(result);
    previousOperand = "";
    operation = "";
    updateDisplay();
}

function clear() {
    currentOperand = "";
    previousOperand = "";
    operation = "";
    updateDisplay();
}

function deleteLast() {
    if (currentOperand === "") return;

    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
}

function percent() {
    if (currentOperand === "") return;

    currentOperand = String(parseFloat(currentOperand) / 100);
    updateDisplay();
}
