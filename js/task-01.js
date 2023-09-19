const list = document.querySelector("#categories");
const categories = [...list.children];
console.log(`Number of categories: ${categories.length}`);
categories.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${[...item.querySelectorAll('li')].length}`);
});
