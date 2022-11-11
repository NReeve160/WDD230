const form = document.querySelector('#form');
const input = document.querySelector('#bposition');
const output = document.querySelector('#output');

const re = /[a-z]/;

function testInfo(bpositionInput) {
  const ok = re.exec(bpositionInput.value);

  output.textContent = ok
    ? `Thanks, your phone number is ${ok[0]}`
    : `${bpositionInput.value} Please only use alpha characters, hypens, and spaces
    minimum of seven characters!`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  testInfo(input);
  document.body.innerHTML = <a href="thankyou.html"></a>
});