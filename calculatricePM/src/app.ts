import { Calculator } from "./calculatrice.js";

const numberButton: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-number]");
const operationButton: NodeListOf<HTMLElement> =
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

  numberButton.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });

  operationButton.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });

  equalsButton?.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
  });

  allClearButton?.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
  });

  deleteButton?.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
  });

} else {
  console.error("Il y a une couille dans le potage");
}
