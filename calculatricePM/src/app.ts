import { Calculator } from "./calculatrice.js";

const numberButton: NodeListOf<HTMLElement> | null =
  document.querySelectorAll("[data-number]");
const operationButton: NodeListOf<HTMLElement> | null =
  document.querySelectorAll("[data-operation]");
const allClearButton: HTMLElement | null =
  document.querySelector("[data-allClear]");
const deleteButton: HTMLElement | null =
  document.querySelector("[data-delete]");
const equalsButton: HTMLElement | null =
  document.querySelector("[data-equals]");
const previousOperandTextElement: HTMLElement | null = document.querySelector(
  "[data-previousOperand]"
);
const currentOperandTextElement: HTMLElement | null = document.querySelector(
  "[data-currentOperand]"
);

if (previousOperandTextElement && currentOperandTextElement) {
  const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
  );

  if (numberButton) {
    numberButton.forEach((button) => {
      button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
      });
    });
  } else {
    console.error("Il y a une couille dans le potage: numberButton");
  }

  if (operationButton) {
    operationButton?.forEach((button) => {
      button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
      });
    });
  } else {
    console.error("Il y a une couille dans le potage: operationButton");
  }

  if (equalsButton) {
    equalsButton?.addEventListener("click", () => {
      calculator.compute();
      calculator.updateDisplay();
    });
  } else {
    console.error("Il y a une couille dans le potage: equalsButton");
  }

  if (allClearButton) {
    allClearButton?.addEventListener("click", () => {
      calculator.clear();
      calculator.updateDisplay();
    });
  } else {
    console.error("Il y a une couille dans le potage: allClearButton");
  }

  if (deleteButton) {
    deleteButton?.addEventListener("click", () => {
      calculator.delete();
      calculator.updateDisplay();
    });
  } else {
    console.error("Il y a une couille dans le potage: deleteButton");
  }
} else {
  console.error("Il y a une couille dans le potage: Calculator initialization");
}
