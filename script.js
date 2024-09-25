let display = document.getElementById('display');
let operation = '';
let firstNumber = '';
let secondNumber = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += number;
}

function setOperation(op) {
    if (firstNumber !== '') {
        calculate();
    }
    firstNumber = display.value;
    operation = op;
    shouldResetDisplay = true;
}

function clearDisplay() {
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    operation = '';
}

function calculate() {
    if (operation === '') return;

    secondNumber = display.value;

    switch (operation) {
        case '+':
            display.value = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            display.value = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            display.value = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            display.value = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
    }

    firstNumber = display.value;
    operation = '';
}
