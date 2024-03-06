export class Calculator {
  previousOperandTextElement: HTMLElement;
  currentOperandTextElement: HTMLElement;
  currentOperand: string = "";
  previousOperand: string = "";
  operation: string | undefined;

  constructor(
    previousOperandTextElement: HTMLElement,
    currentOperandTextElement: HTMLElement
  ) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear(): void {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number: string) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation: string): void {
    if (this.operation !== undefined) this.compute();
    if (this.currentOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation: number;
    const previous: number = parseFloat(this.previousOperand);
    const current: number = parseFloat(this.currentOperand);

    if (isNaN(previous) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = previous + current;
        break;
      case "-":
        computation = previous - current;
        break;
      case "÷":
        if (current === 0) return;
        computation = previous / current;
        break;
      case "x":
        computation = previous * current;
        break;
      default:
        return;
    }

    this.currentOperand = computation.toString();
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number: string): string {
    const integerNumber: number = parseFloat(number.split(".")[0]);
    const decimalNumber: string = number.split(".")[1];
    let integerDisplay: string;

    if (isNaN(integerNumber)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerNumber.toLocaleString("fr", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalNumber != null) {
      return `${integerDisplay}.${decimalNumber}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );

    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    }
  }
}
