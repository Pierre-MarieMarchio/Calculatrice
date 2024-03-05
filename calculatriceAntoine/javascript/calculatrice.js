const display = document.getElementById("display");

let handleKeyPressKeyBoard = (event) => {
  let keyValue = event.key;
  if (!isNaN(keyValue) || "+-*/%".includes(keyValue)) {
    addToDisplay(keyValue);
  } else if (keyValue === "Enter") {
    calculate();
  } else if (keyValue === "Backspace") {
    clearEntry();
  }
};
document.addEventListener("keydown", handleKeyPressKeyBoard);

let isEqualPressed = false;

let addToDisplay = (value) => {
  if (isEqualPressed) {
    display.value = "";
    isEqualPressed = false;
  }
  display.value += value;
};

let onClickNumber = (number) => {
  addToDisplay(number);
};

let onClickOperator = (operator) => {
  addToDisplay(operator);
};

let clearAll = () => {
  document.getElementById("display").value = "";
};

let clearEntry = () => {
  let displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
};

let evaluateExpression = (expression) => {
  expression = expression.replace(/\s+/g, "");

  let tabNumber = [];
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    if (!isNaN(char) || char === ".") {
      currentNumber += char;
    } else {
      if (currentNumber !== "") {
        tabNumber.push(parseFloat(currentNumber));
        currentNumber = "";
      }
      tabNumber.push(char);
    }
  }
  if (currentNumber !== "") {
    tabNumber.push(parseFloat(currentNumber));
  }

  let calculateOperator = (operator, operand1, operand2) => {
    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        if (operand2 === 0) {
          alert(`Erreur le nombre ${operand1} n'est pas divisible par 0 !`);
        }
        return operand1 / operand2;
      case "%":
        return operand1 % operand2;
      default:
        throw new Error(`Opérateur non pris en charge: ${operator}`);
    }
  };

  let result = tabNumber[0];
  for (let i = 1; i < tabNumber.length; i += 2) {
    let operator = tabNumber[i];
    let operand = tabNumber[i + 1];
    result = calculateOperator(operator, result, operand);
  }

  isEqualPressed = true;
  return result;
};

let calculate = () => {
  let expression = document.getElementById("display").value;
  try {
    let result = evaluateExpression(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Erreur: " + error.message;
  }
};
