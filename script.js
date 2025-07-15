const form = document.getElementById('paste-form');
const input = document.getElementById('paste-input');
const output = document.getElementById('paste-output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const pasteText = input.value;
  output.textContent = pasteText;
});
