let currentInput = "";
let operation = "";
let prevInput = "";

function appendToOutput(value) {
    currentInput += value;
    document.getElementById("result").value = currentInput;
}

function clearOutput() {
    currentInput = "";
    prevInput = "";
    operation = "";
    document.getElementById("result").value = "";
}

function calculate() {
    switch (operation) {
        case '+':
            document.getElementById("result").value = parseFloat(prevInput) + parseFloat(currentInput);
            break;
        case '-':
            document.getElementById("result").value = parseFloat(prevInput) - parseFloat(currentInput);
            break;
        case '*':
            document.getElementById("result").value = parseFloat(prevInput) * parseFloat(currentInput);
            break;
        case '/':
            if (parseFloat(currentInput) === 0) {
                document.getElementById("result").value = "ERROR: Divide by zero";
            } else {
                document.getElementById("result").value = parseFloat(prevInput) / parseFloat(currentInput);
            }
            break;
        default:
            break;
    }
    prevInput = currentInput;
    currentInput = "";
}

function operation(op) {
    if (currentInput !== "") {
        calculate();
    }
    operation = op;
}
