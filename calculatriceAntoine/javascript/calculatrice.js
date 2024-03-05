function addToDisplay(value) {
  display.value += value;
}

function onClickNumber(number) {
  addToDisplay(number);
}

function onClickOperator(operator) {
  addToDisplay(operator);
}
function clearAll() {
  document.getElementById("display").value = "";
}

function clearEntry() {
  let displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
}

const display = document.getElementById("display");
