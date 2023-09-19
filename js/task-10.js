function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
input.addEventListener('change', findNumber);
let number = 0;
function findNumber(event) {
  number = Number(event.currentTarget.value);
  return number;
}

function createBoxes(amount) {
  amount = number;
  const newBoxes = [];
  for (let i = 0; i < amount; i += 1){
    const element = document.createElement('div');
    let widthNow = 30 + i * 10;
    element.style.width = `${widthNow}px`;
    element.style.height = element.style.width;
    element.style.backgroundColor = getRandomHexColor();
    newBoxes.push(element);
  }
  boxes.append(...newBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
