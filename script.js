function calculate(operation) {
  const firstNumber = Number(document.getElementById("num1").value);
  const secondNumber = Number(document.getElementById("num2").value);
  const result = document.getElementById("result");

  if (document.getElementById("num1").value === "" || document.getElementById("num2").value === "") {
    result.textContent = "Result: enter both numbers";
    return;
  }

  if (operation === "/" && secondNumber === 0) {
    result.textContent = "Result: cannot divide by zero";
    return;
  }

  let answer;
  if (operation === "+") answer = firstNumber + secondNumber;
  if (operation === "-") answer = firstNumber - secondNumber;
  if (operation === "*") answer = firstNumber * secondNumber;
  if (operation === "/") answer = firstNumber / secondNumber;
  if (operation === "%") answer = firstNumber % secondNumber;

  result.textContent = `Result: ${answer}`;
}

function clearCalculator() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "Result:";
}
