const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngridients = ingredients.map(item => {
  const element = document.createElement('li');
  element.textContent = item;
  element.classList.add('item');
  return element;
})
const list = document.querySelector('#ingredients');
list.append(...allIngridients);
