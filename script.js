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

}

let operandOne;
let operator;   
let operandTwo;

const screen = document.getElementById("calc-screen");
screen.textContent = "0";

const numberKeys = [];

for(let i = 0; i <= 9; i++) {
    numberKeys[i] = document.getElementById(`${i}`);
    numberKeys[i].addEventListener("click", () => {
        screen.value += `${i}`;
    });
}


console.table(numberKeys);