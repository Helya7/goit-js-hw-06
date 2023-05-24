let counterValue = 0;

const valueEl = document.getElementById("value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const updateCounterValue = () => {
  valueEl.textContent = counterValue;
};

const incrementCounter = () => {
  counterValue += 1;
  updateCounterValue();
};

const decrementCounter = () => {
  counterValue -= 1;
  updateCounterValue();
};

incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
