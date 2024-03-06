export class Calculator {
  previousOperandTextElement: HTMLElement;
  currentOperandTextElement: HTMLElement;
  currentOperand: string = "";
  previousOperand: string = "";
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
    this.operations = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  appendNumber(number: string) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand + number;
  }

  choseOperattion(operation: string): string | undefined {
    if (this.operations === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operations = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let compute: number;
    const previous: number = parseFloat(this.previousOperand);
    const current: number = parseFloat(this.currentOperand);

    if (isNaN(previous) || isNaN(current)) return;

    switch (this.operations) {
      case "+":
        compute = previous + current;
        break;
      case "-":
        compute = previous - current;
        break;
      case "÷":
        if (current === 0) return;
        compute = previous / current;
        break;
      case "x":
        compute = previous * current;
        break;
      default:
        return;
    }

    this.currentOperand = compute.toString();
    this.operations = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number: string): string {

    if (isNaN(parseFloat(number))) return ''

    return parseFloat(number).toLocaleString('fr');
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );

    if (this.operations != null)
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operations}`;
  }
}
