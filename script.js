//your JS code here. If required.
let inputs = document.querySelectorAll('.code');

inputs.forEach((input, idx, inputsArr) => {
  input.addEventListener('input', () => {
    if (input.value) {
      if (idx < inputsArr.length - 1) {
        inputsArr[idx + 1].focus();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === "Backspace" && !input.value && idx > 0) {
      inputsArr[idx - 1].focus();
    }
  });
});
