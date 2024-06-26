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

function main() {
    console.log("");
    console.log("Select operation:");
    console.log("    1. Addition");
    console.log("    2. Subtraction");
    console.log("    3. Multiplication");
    console.log("    4. Division");
    console.log("    5. Exponentiation");
    console.log("");

    const choice = parseInt(prompt("Enter the operation you want to do: (1/2/3/4/5)"));

    let x, y;
    switch (choice) {
        case 1:
            x = prompt("Enter the first number you want to add:");
            y = prompt("Enter the amount you want to add to it:");
            console.log(`${x} + ${y} = ${add(x, y)}`);
            break;
        case 2:
            x = prompt("Enter the number you want to subtract:");
            y = prompt("Enter the amount you want to subtract it by:");
            console.log(`${x} - ${y} = ${subtract(x, y)}`);
            break;
        case 3:
            x = prompt("Enter the first number you want to multiply:");
            y = prompt("Enter the amount you want to multiply it by:");
            console.log(`${x} * ${y} = ${multiply(x, y)}`);
            break;
        case 4:
            x = prompt("Enter the number you want to divide:");
            y = prompt("Enter the amount you want to divide it by:");
            if (y === '0') {
                console.log("ERROR. YOU CANNOT DIVIDE BY 0.");
            } else {
                console.log(`${x} / ${y} = ${divide(x, y)}`);
            }
            break;
        case 5:
            x = prompt("Enter the first number you want to raise to a power:");
            y = prompt("Enter the power you want to raise it to:");
            console.log(`${x} ^ ${y} = ${exponentiate(x, y)}`);
            break;
        default:
            console.log("Invalid choice. Please enter a number from 1 to 5.");
    }
}

while (true) {
    main();
    console.log("");
    console.log("");
    console.log("");
    prompt("Press Enter to restart");
}
