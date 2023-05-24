const nameInputEl = document.getElementById("name-input");
const nameOutputEl = document.getElementById("name-output");

nameInputEl.addEventListener("input", () => {
  const inputValueEl = nameInputEl.value.trim();

  if (inputValueEl === "") {
    nameOutputEl.textContent = "Anonymous";
  } else {
      nameOutputEl.textContent = inputValueEl;;
  }
});