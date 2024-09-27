// Display screen
let result = document.getElementById('result');

// Append number to the screen
function appendValue(value) {
    result.value += value;
}

// Append operators (like +, -, *, /)
function appendOperator(operator) {
    if (operator === 'pi') {
        result.value += Math.PI;
    } else if (operator === 'e') {
        result.value += Math.E;
    } else {
        result.value += operator;
    }
}

// Calculate the result
function calculate() {
    try {
        result.value = eval(result.value.replace('^', '**'));
    } catch (error) {
        alert("Invalid Input");
        clearScreen();
    }
}

// Clear the screen
function clearScreen() {
    result.value = "";
}

// Delete the last character from the screen
function deleteLast() {
    result.value = result.value.slice(0, -1);
}
