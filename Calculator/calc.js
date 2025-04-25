const previousOperandText = document.querySelector("[data-previous]");
const currentOperandText = document.querySelector("[data-current]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const acButton = document.querySelector("[data-ac]");
const delButton = document.querySelector("[data-delete]");
const percentButton = document.querySelector("[data-percent]");

let currentOperand = "";
let previousOperand = "";
let operation = null;

for (let button of numberButtons) {
    button.addEventListener("click", () => {
        const number = button.textContent;

        if (number === "." && currentOperand.includes(".")) return;
        else {
            currentOperand += number;
            updateDisplay();
        }
    });
}

for (let button of operatorButtons) {
    button.addEventListener("click", () => {
        if (button.value === "=") {
            button.addEventListener("click", compute);
        } else {
            button.addEventListener("click", () => chooseOperation(button.value));
        }
    });
}

acButton.addEventListener("click", clear);
delButton.addEventListener("click", deleteLast);
percentButton.addEventListener("click", percent);
updateDisplay();

function updateDisplay() {
    currentOperandText.textContent = currentOperand;
    previousOperandText.textContent = previousOperand + (operation || "");
}

function chooseOperation(operation) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
        compute();
    }

    previousOperand = currentOperand;
    currentOperand = "";
    updateDisplay();
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                result = "Error";
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentOperand = result.toString();
    operation = null;
    previousOperand = "";
    updateDisplay();
}

function clear() {
    currentOperand = "";
    previousOperand = "";
    operation = null;
    updateDisplay();
}

function deleteLast() {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
}

function percent() {
    if (currentOperand === "") return;
    currentOperand = (parseFloat(currentOperand) / 100).toString();
    updateDisplay();
}
