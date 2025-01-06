function appendToDisplay(value) {
  document.getElementById("calculator__display").value += value;
}

function clearDisplay() {
  document.getElementById("calculator__display").value = "";
}

function calculateResult() {
  let expression = document.getElementById("calculator__display").value;
  try {
    let result = eval(expression);

    if (expression === "") return (document.getElementById("calculator__display").value = "");

    document.getElementById("calculator__display").value = result;
  } catch (e) {
    document.getElementById("calculator__display").value = "Error";
  }
}

function deleteLastCharacter() {
  let display = document.getElementById("calculator__display");
  display.value = display.value.slice(0, -1);
}
