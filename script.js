function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}
  function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // Change button text
  if (document.body.classList.contains("dark")) {
    this.textContent = "☀️ Light Mode";
  } else {
    this.textContent = "🌙 Dark Mode";
  }
});



