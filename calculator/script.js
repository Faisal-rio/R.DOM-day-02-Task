document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(
    ".btn-number, .btn-accent, .btn-function"
  );
  const calculateButton = document.getElementById("calculate");
  const clearButton = document.getElementById("clear");

  let expression = "";

  // Handle button clicks
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value") || button.textContent;
      if (value) {
        if (value === "%") {
          expression += "/100"; // Handle percentage
        } else {
          expression += value;
        }
        display.value = expression;
      }
    });
  });

  // Handle keyboard events
  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (/^[0-9]$/.test(key) || ["+", "-", "*", "/", "."].includes(key)) {
      expression += key;
      display.value = expression;
    } else if (key === "Enter") {
      try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
      } catch (error) {
        alert("Error in calculation");
        expression = "";
        display.value = "";
      }
    } else if (key === "Backspace") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else if (
      key !== "Shift" &&
      key !== "Control" &&
      key !== "Alt" &&
      key !== "Meta"
    ) {
      alert("Only numbers and basic arithmetic operations are allowed.");
    }
  });

  // Calculate result
  calculateButton.addEventListener("click", () => {
    try {
      // Evaluate expression
      const result = eval(expression);
      display.value = result;
      expression = result.toString();
    } catch (error) {
      alert("Error in calculation");
      expression = "";
      display.value = "";
    }
  });

  // Clear display
  clearButton.addEventListener("click", () => {
    expression = "";
    display.value = "";
  });
});
