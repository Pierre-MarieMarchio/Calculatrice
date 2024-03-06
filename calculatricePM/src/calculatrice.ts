export class Calculator {
  previousOperandTextElement: HTMLElement;
  currentOperandTextElement: HTMLElement;
  currentOperand: string = '';
  previousOperand: string = '';
  operations: string | undefined;

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
    // this.operation = undefined;
  }

  delete() {}

  appendNumber(number : string){
    this.currentOperand = number
  }

  compute() {}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
  }
}
