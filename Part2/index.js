// console.log('Your mom always wins');

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

console.log('idInput', idInput);
console.log('colorInput', colorInput);

function setCard() {
  const card = document.getElementById(idInput.value);
  
  card.style.color = colorInput.value;
}