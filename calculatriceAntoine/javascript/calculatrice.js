const display = document.getElementById("display");
const history = [];

// event clavier user
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

// Gestion chiffre display
let addToDisplay = (value) => {
  if (isEqualPressed) {
    display.value = "";
    isEqualPressed = false;
  }
  display.value += value;
};

// efface all
let clearAll = () => {
  display.value = "";
};

// efface un caractère du display
let clearEntry = () => {
  let displayValue = display.value;
  display.value = displayValue.slice(0, -1);
};

// Éval expression math
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

// Fonction calcul
let isEqualPressed = false;
let calculate = () => {
  let expression = display.value;
  try {
    let result = evaluateExpression(expression);
    display.value = result;
    history.push(`${expression} = ${result}`);
    updateHistory();
    if (history.length >= 5) {
      clearHistory();
    }
  } catch (error) {
    display.value = "Erreur: " + error.message;
  }
};

// Maj historique
let updateHistory = () => {
  let historyElement = document.getElementById("history");
  historyElement.innerHTML = "<h4>Historique des calculs</h4>";
  for (let i = history.length - 1; i >= 0; i--) {
    let entry = document.createElement("p");
    entry.textContent = history[i];
    historyElement.appendChild(entry);
  }
};

// Effacement de l'historique
let clearHistory = () => {
  history.length = 0;
  updateHistory();
};
