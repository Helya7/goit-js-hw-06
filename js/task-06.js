const validationInputEl = document.getElementById("validation-input");

validationInputEl.addEventListener("blur", () => {
    const inputValue = validationInputEl.value.trim();
    const dataLength = parseInt(validationInputEl.dataset.length);

  if (inputValue.length === dataLength) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  } else {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
});

