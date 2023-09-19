const loginForm = document.querySelector('.login-form');

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const e_mail = form.elements.email.value;
    const password = form.elements.password.value;

    if (e_mail === '' || password === '') {
        alert('All fields must be filled!!!')
    }
    else{
        const user = {};
        user.Email = e_mail;
        user.Password = password;
        console.log(user);
        form.reset();
    }
    
   
}

loginForm.addEventListener('submit', handleSubmit);