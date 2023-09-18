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
const newBoxes = [];
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1){
    const element = document.createElement('div');
    element.style.width = '30px';
    element.style.height = element.style.width;
    element.style.border = '2px solid red';
    newBoxes.push(element);
  }
  return newBoxes;
}

console.log(createBoxes(5));
boxes.append(...newBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
}
