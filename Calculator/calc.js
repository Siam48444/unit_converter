const previousOperandText = document.querySelector('[data-previous]');
const currentOperandText = document.querySelector('[data-current]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const acButton = document.querySelector('[data-ac]');
const delButton = document.querySelector('[data-delete]');
const percentButton = document.querySelector('[data-percent]');

let currentOperand = '0';
let previousOperand = '';
let operation = null;

function updateDisplay() {
    currentOperandText.textContent = currentOperand;
    previousOperandText.textContent = previousOperand + (operation || '');
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentOperand = result.toString();
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function clear() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function deleteLast() {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
}

function percent() {
    if (currentOperand === '') return;
    currentOperand = (parseFloat(currentOperand) / 100).toString();
    updateDisplay();
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent));
});

operatorButtons.forEach(button => {
    if (button.textContent === '=') {
        button.addEventListener('click', compute);
    } else {
        button.addEventListener('click', () => chooseOperation(button.textContent));
    }
});

acButton.addEventListener('click', clear);
delButton.addEventListener('click', deleteLast);
percentButton.addEventListener('click', percent);

updateDisplay();
