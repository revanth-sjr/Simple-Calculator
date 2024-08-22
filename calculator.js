const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = evaluateExpression(display.value);
  } catch (error) {
    display.value = "error";
  }
}

function evaluateExpression(expression) {
  const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
  
  const result = new Function('return ' + sanitizedExpression)();
  
  if (isFinite(result)) {
    return result;
  } else {
    throw new Error('Invalid expression');
  }
}