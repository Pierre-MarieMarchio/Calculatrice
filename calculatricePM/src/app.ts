import { calculatrice } from "../src/calculatrice";

const numberButton: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-number");
const operationButton: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-operation");
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

calculatrice();

