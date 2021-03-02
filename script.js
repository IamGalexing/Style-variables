const inputsRef = document.querySelectorAll(".controls input");

inputsRef.forEach((input) => {
  input.addEventListener("input", changeValue);
});

function changeValue() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
