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


let displayVal = ""; //Initializing displayVal to an empty string

num7.addEventListener("click", () => {
    console.log("7");
    displayVal += "7";
    updateCalcString("7");
    updateDisplay();
})
num8.addEventListener("click", () => {
    console.log("8");
    displayVal += "8";
    updateCalcString("8");
    updateDisplay();

})
num9.addEventListener("click", () => {
    console.log("9");
    displayVal += "9";
    updateCalcString("9");
    updateDisplay();
})
num4.addEventListener("click", () => {
    console.log("4");
    displayVal += "4";
    updateCalcString("4");
    updateDisplay();
})
num5.addEventListener("click", () => {
    console.log("5");
    displayVal += "5";
    updateCalcString("5");
    updateDisplay();
})
num6.addEventListener("click", () => {
    console.log("6");
    displayVal += "6";
    updateCalcString("6");
    updateDisplay();
})
num1.addEventListener("click", () => {
    console.log("1");
    displayVal += "1";
    updateCalcString("1");
    updateDisplay();
})
num2.addEventListener("click", () => {
    console.log("2");
    displayVal += "2";
    updateCalcString("2");
    updateDisplay();
})
num3.addEventListener("click", () => {
    console.log("3");
    displayVal += "3";
    updateCalcString("3");
    updateDisplay();
})
num0.addEventListener("click", () => {
    console.log("0");
    displayVal += "0";
    updateCalcString("0");
    updateDisplay();
})

//Event Listener and query for all operator butttons and clearing the display
const addButton = document.querySelector(".opPlus");
const subtractButton = document.querySelector(".opSubt");
const multiplyButton = document.querySelector(".opMult");
const divideButton = document.querySelector(".opDiv");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".opEqual");
addButton.addEventListener("click", () => {
    console.log("Add");
    updateCalcString("+");
    displayVal = ""; // Clear displayVal after operation
    updateDisplay();
})
subtractButton.addEventListener("click", () => {
    console.log("Subtract");
    updateCalcString("-");
    displayVal = ""; // Clear displayVal after operation
    updateDisplay();
})
multiplyButton.addEventListener("click", () => {
    console.log("Multiply");
    updateCalcString("*");
    displayVal = ""; // Clear displayVal after operation
    updateDisplay();
})
divideButton.addEventListener("click", () => {
    console.log("Divide");
    updateCalcString("/");
    displayVal = ""; // Clear displayVal after operation
    updateDisplay();
})
clearButton.addEventListener("click", () => {
    console.log("Clear");
    clearDisplay();
    currentString = "";
})

equalsButton.addEventListener("click", () => {
    console.log("Equals");
    updateCalcString("=");
    currentString = 
    // After equals, we can clear displayVal or keep it for further calculations
    updateDisplay();
})

let display = document.querySelector(".display");

function updateDisplay() {
    display.textContent = displayVal.toString();
}

function clearDisplay() {
    displayVal = "";
    updateDisplay();
}

currentString = "";
function updateCalcString(string) {
    let operatorSigns = ["+", "-", "*", "/"];
    let hasOperator = operatorSigns.includes(string);
    // console.log("Has Operator: " + hasOperator);
    if (hasOperator) {
        // console.log("Operator DETECTED");
        currentString += " " + string + " ";
    } else if (string === "=") {
        let parts = currentString.split(" ");
        displayVal = operator(parts);
        currentString = operator(parts).toString();
        return operator(parts);
    } else {
        currentString += string;
    }
    console.log("Current Calculation String: " + currentString);
    }

function operator(lis) {
    let firstNum = parseFloat(lis[0]);
    let secondNum = parseFloat(lis[2]);
    let operator = lis[1];

    if (operator === "+") {
        let sumNum = add(firstNum, secondNum);
        currentString = sumNum.toString();
        updateDisplay();
        return sumNum;
    }
    else if (operator === "-") {
        let subNum = subtract(firstNum, secondNum);
        currentString = subNum.toString();
        updateDisplay();
        return subNum;
    }
    else if (operator === "*") {
        let multNum = multiply(firstNum, secondNum);
        currentString = multNum.toString();
        updateDisplay();
        return multNum;
    }
    else if (operator === "/") {
        let divNum = divide(firstNum, secondNum);
        currentString = divNum.toString();
        updateDisplay();
        return divNum;
    }
    else {
        throw new Error("Invalid operator.");
    }
}