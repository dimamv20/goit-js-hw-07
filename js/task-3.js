const textInput = document.querySelector(".task-3 #name-input");
const output = document.querySelector(".task-3 #name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});
