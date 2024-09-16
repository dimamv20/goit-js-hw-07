const registerForm = document.querySelector(".task-4 .login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
  }

  console.log(`Login: ${email}, Password: ${password}`);
  form.reset();
}

