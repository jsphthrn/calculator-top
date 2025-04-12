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
        screen.value += `${i}`;
    });
}

const backspace = document.getElementById("backspace");
backspace.addEventListener("click", () => {
    screen.value = screen.value.slice(0, screen.value.length - 1);
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    screen.value = "";
});

const multiply = document.getElementById("mul");
multiply.addEventListener("click", () => {
    screen.value += "*";
});

const divide = document.getElementById("div");
divide.addEventListener("click", () => {
    screen.value += "/";
});

const sum = document.getElementById("add");
sum.addEventListener("click", () => {
    screen.value += "+";
});

const substract = document.getElementById("sub");
substract.addEventListener("click", () => {
    screen.value += "-";
});