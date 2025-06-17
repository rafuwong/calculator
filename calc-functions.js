function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function operate(funct, a, b) {
    if (funct === 'add') {
        return add(a, b);
    } else if (funct === 'subtract') {
        return subtract(a, b);
    } else if (funct === 'multiply') {
        return multiply(a, b);
    } else if (funct === 'divide') {
        return divide(a, b);
    } else {
        throw new Error("Invalid operation.");
    }
}

//Event Listener and query for all number buttons
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num0 = document.querySelector(".num0");

num7.addEventListener("click", () => {
    console.log("7");
})
num8.addEventListener("click", () => {
    console.log("8");
})
num9.addEventListener("click", () => {
    console.log("9");
})
num4.addEventListener("click", () => {
    console.log("4");
})
num5.addEventListener("click", () => {
    console.log("5");
})
num6.addEventListener("click", () => {
    console.log("6");
})
num1.addEventListener("click", () => {
    console.log("1");
})
num2.addEventListener("click", () => {
    console.log("2");
})
num3.addEventListener("click", () => {
    console.log("3");
})
num0.addEventListener("click", () => {
    console.log("0");
})

//Event Listener and query for all operator butttons and clearing the display
const addButton = document.querySelector(".opPlus");
const subtractButton = document.querySelector(".opSubt");
const multiplyButton = document.querySelector(".opMult");
const divideButton = document.querySelector(".opDiv");
const clearButton = document.querySelector(".clear");

addButton.addEventListener("click", () => {
    console.log("Add");
})
subtractButton.addEventListener("click", () => {
    console.log("Subtract");
})
multiplyButton.addEventListener("click", () => {
    console.log("Multiply");
})
divideButton.addEventListener("click", () => {
    console.log("Divide");
})
clearButton.addEventListener("click", () => {
    console.log("Clear");
    clearDisplay();
})

let display = document.querySelector(".display");

function updateDisplay() {
    display.textContent = displayNum.toString();
}
let displayNum = 0;

function clearDisplay() {
    displayNum = 0;
    updateDisplay();
}