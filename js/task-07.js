const fontSizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

fontSizeControlEl.addEventListener("input", () => {
  const fontSize = fontSizeControlEl.value + "px";
  textEl.style.fontSize = fontSize;
});

