let firstNumber = Number(prompt("Podaj pierwszą liczbę: "));
let operation = prompt("Podaj operator arytmetyczny (+, -, *, /, %): ");
let secondNumber = Number(prompt("Podaj drugą liczbę: "));

function calc(firstNumber, secondNumber) {
    if (operation === "+") {
        confirm(firstNumber + secondNumber);
    }
    else if (operation === "-") {
        confirm(firstNumber - secondNumber);
    }
    else if (operation === "*") {
        confirm(firstNumber * secondNumber);
    }
    else if (operation === "/") {
        if (secondNumber === 0) {
            confirm("Nie dziel przez 0");
        }
        else {
            confirm(firstNumber / secondNumber);
        }
    }
    else if (operation === "%") {
        confirm(firstNumber % secondNumber);
    }
    else {
        confirm("Uzyłeś złego znaku")
    }
}

calc(firstNumber, secondNumber)