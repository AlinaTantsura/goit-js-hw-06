const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function changeFontStyle(event) {
    const value = event.currentTarget.value;
    text.style.fontSize = value + 'px';
}
range.addEventListener('change', changeFontStyle);
