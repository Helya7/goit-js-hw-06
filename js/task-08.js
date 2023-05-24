const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInputEl = loginFormEl.elements.email;
  const passwordInputEl = loginFormEl.elements.password;

  if (emailInputEl.value === "" || passwordInputEl.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const loginData = {
      email: emailInputEl.value,
      password: passwordInputEl.value,
    };

    console.log(loginData);

    loginFormEl.reset();
  }
}

