document.getElementById("colorInput").addEventListener("input", (event) => {
  let selectedColor = event.target.value;

  const colorCode = document.getElementById("colorCode");
  colorCode.textContent = selectedColor;
  colorCode.style.color = selectedColor;

  document.getElementById("displayColor").style.backgroundColor = selectedColor;
});
