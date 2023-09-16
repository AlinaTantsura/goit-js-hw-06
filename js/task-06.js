const input = document.querySelector('#validation-input');

const checkLength = (event) => {
    let string = event.currentTarget.value;
    const correctLength = Number(input.dataset.length);
    if (string.length === correctLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    };
};
input.addEventListener('blur', checkLength);