let counterValue = 0;
const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

btnIncr.addEventListener('click', () => {counterValue += 1; return value.textContent = counterValue; });
btnDecr.addEventListener('click', () => {counterValue -= 1; return value.textContent = counterValue; });
