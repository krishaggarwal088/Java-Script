  const display = document.getElementById("result");

  function appendValue(value) {
    display.value += value;
  }

  function clearResult() {
    display.value = "";
  }

  function deleteLast() {
    display.value = display.value.slice(0, -1);
  }

  function calculate() {
    try {
      display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (error) {
      display.value = "Error";
    }
  }

  document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (
      (key >= "0" && key <= "9") ||
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/" ||
      key === "."
    ) {
      display.value += key;
    }

    if (key === "Enter") {
      event.preventDefault();
      calculate();
    }

    if (key === "Backspace") {
      deleteLast();
    }

    if (key === "Escape") {
      clearResult();
    }
  });