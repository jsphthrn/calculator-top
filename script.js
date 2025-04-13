// basic functions

function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function mul (a, b) {
    return a * b;
}

function div (a, b) {
    return a / b;
}

function operate (op1, op, op2) {
    switch (op) {
        case '+':
            return (op1 * 1) + (op2 * 1);
        case '-':
            return (op1 * 1) - (op2 * 1);
        case '*':
            return (op1 * 1) * (op2 * 1);
        case '/':
            return (op1 * 1) / (op2 * 1);
    }
}

let operandOne;
let operator;   
let operandTwo;
let clearCalc = false;
let ans;

const screen = document.getElementById("calc-screen");
/* screen.addEventListener("beforeinput", () => {
    ans = screen.value;
})
*/

const numberKeys = [];

for(let i = 0; i <= 9; i++) {
    numberKeys[i] = document.getElementById(`${i}`);
    numberKeys[i].addEventListener("click", () => {
        if (clearCalc) {
            screen.value = `${i}`;
            clearCalc = false;
        } else {
            screen.value += `${i}`;
        }
    });
}

const backspace = document.getElementById("backspace");
backspace.addEventListener("click", () => {
    screen.value = screen.value.slice(0, screen.value.length - 1);
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    screen.value = '';
    operandOne = undefined;
    operandTwo = undefined;
    operator = undefined;
});

const multiply = document.getElementById("mul");
multiply.addEventListener("click", () => {
    (operandOne) ? operandTwo = screen.value : operandOne = screen.value;
    operator = "*";
    clearCalc = true;
});

const divide = document.getElementById("div");
divide.addEventListener("click", () => {
    (operandOne) ? operandTwo = screen.value : operandOne = screen.value;
    operator = "/";
    clearCalc = true;
});

const sum = document.getElementById("add");
sum.addEventListener("click", () => {
    (operandOne) ? operandTwo = screen.value : operandOne = screen.value;
    operator = "+";
    clearCalc = true;
});

const substract = document.getElementById("sub");
substract.addEventListener("click", () => {
    (operandOne) ? operandTwo = screen.value : operandOne = screen.value;
    operator = "-";
    clearCalc = true;
});

const equal = document.getElementById("equals");
equal.addEventListener("click", () => {
    operandTwo = screen.value;
    screen.value = operate(operandOne, operator, operandTwo);
    ans = screen.value;
    operandOne = ans;
    operandTwo = undefined;
    operator = undefined;
    clearCalc = true;
});