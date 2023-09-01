const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  //   console.log(`Email: ${email}, Password: ${password}`);

  formEl.reset();
});
