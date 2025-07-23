// Get the display screen element
const screen = document.getElementById('screen');

// Variables to store calculator state
let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetScreen = false;

// Get all buttons and add event listeners
const buttons = document.querySelectorAll('.btn');

// Loop through all buttons and add click event listeners
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick);
}

// Main function to handle button clicks
function handleButtonClick(event) {
    const button = event.target;
    const action = button.dataset.action;
    const number = button.dataset.number;
    
    // Use if-else statements to determine what action to take
    if (number !== undefined) {
        // Handle number input
        handleNumber(number);
    } else if (action === 'operator') {
        // Handle operator input (+, -, ×, ÷)
        handleOperator(button.textContent);
    } else if (action === 'equals') {
        // Handle equals button
        handleEquals();
    } else if (action === 'decimal') {
        // Handle decimal point
        handleDecimal();
    } else if (action === 'clear') {
        // Handle clear button
        handleClear();
    }
}

// Function to handle number input
function handleNumber(num) {
    // If we should reset the screen (after an operation), clear it first
    if (shouldResetScreen) {
        currentInput = '';
        shouldResetScreen = false;
    }
    
    // Add the number to current input
    currentInput += num;
    updateScreen(currentInput);
}

// Function to handle operator input
function handleOperator(op) {
    // If there's already an operator and current input, calculate first
    if (operator && currentInput && previousInput) {
        handleEquals();
    }
    
    // Store the previous input and operator
    previousInput = currentInput || previousInput;
    operator = op;
    shouldResetScreen = true;
}

// Function to handle equals button
function handleEquals() {
    // Only calculate if we have all necessary values
    if (previousInput && operator && currentInput) {
        const result = calculate(previousInput, operator, currentInput);
        
        // Update the screen with result
        updateScreen(result);
        
        // Reset calculator state
        currentInput = result;
        previousInput = '';
        operator = '';
        shouldResetScreen = true;
    }
}

// Function to handle decimal point
function handleDecimal() {
    // If we should reset screen, start with "0."
    if (shouldResetScreen) {
        currentInput = '0';
        shouldResetScreen = false;
    }
    
    // Only add decimal if there isn't one already
    if (currentInput.indexOf('.') === -1) {
        currentInput += '.';
        updateScreen(currentInput);
    }
}

// Function to handle clear button
function handleClear() {
    // Reset all variables to initial state
    currentInput = '';
    previousInput = '';
    operator = '';
    shouldResetScreen = false;
    updateScreen('');
}

// Function to perform calculations
function calculate(first, op, second) {
    // Convert strings to numbers for calculation
    const firstNum = parseFloat(first);
    const secondNum = parseFloat(second);
    let result;
    
    // Use if-else to determine which operation to perform
    if (op === '+') {
        result = firstNum + secondNum;
    } else if (op === '-') {
        result = firstNum - secondNum;
    } else if (op === '×') {
        result = firstNum * secondNum;
    } else if (op === '÷') {
        // Check for division by zero
        if (secondNum === 0) {
            return 'Error';
        }
        result = firstNum / secondNum;
    }
    
    // Round result to avoid floating point precision issues
    return Math.round(result * 100000000) / 100000000;
}

// Function to update the display screen
function updateScreen(value) {
    screen.value = value;
}

// Optional: Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Handle number keys
    if (key >= '0' && key <= '9') {
        handleNumber(key);
    }
    // Handle operator keys
    else if (key === '+') {
        handleOperator('+');
    } else if (key === '-') {
        handleOperator('-');
    } else if (key === '*') {
        handleOperator('×');
    } else if (key === '/') {
        event.preventDefault(); // Prevent default browser search
        handleOperator('÷');
    }
    // Handle other keys
    else if (key === 'Enter' || key === '=') {
        handleEquals();
    } else if (key === '.') {
        handleDecimal();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        handleClear();
    }
});