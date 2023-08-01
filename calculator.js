let displayValue = " ";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = " ";
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById('display');
  displayElement.value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = String(result);
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

