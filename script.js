function formattedAnswer(answer) {
    if (Number.isInteger(answer)) {
        return answer.toLocaleString();
    } else {
        return answer.toLocaleString(undefined, { maximumFractionDigits: 10 });
    }
}

function add(x, y) {
    return formattedAnswer(parseFloat(x) + parseFloat(y));
}

function subtract(x, y) {
    return formattedAnswer(parseFloat(x) - parseFloat(y));
}

function multiply(x, y) {
    return formattedAnswer(parseFloat(x) * parseFloat(y));
}

function divide(x, y) {
    if (parseFloat(y) === 0) {
        return "ERROR. YOU CANNOT DIVIDE BY 0.";
    }
    return formattedAnswer(parseFloat(x) / parseFloat(y));
}

function exponentiate(x, y) {
    return formattedAnswer(Math.pow(parseFloat(x), parseFloat(y)));
}

document.getElementById("calculate").addEventListener("click", function() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.querySelector('input[name="operation"]:checked').value;

    let result;
    switch (operation) {
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
        case "exponentiate":
            result = exponentiate(num1, num2);
            break;
    }

    document.getElementById("result").innerText = `${num1} ${operation} ${num2} = ${result}`;
});

