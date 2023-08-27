const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", inputFillCheck);

const inputLength = Number(textInput.dataset.length);
console.log(inputLength);

function inputFillCheck() {
  if (textInput.value.length === inputLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}
