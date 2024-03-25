let display = document.getElementById('display');
let currentInput = '';

function addToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result;
    } catch (error) {
        display.value = 'Error';
    }
}
