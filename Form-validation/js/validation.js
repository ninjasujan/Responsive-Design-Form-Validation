
/* Validation for the user inputs */

const form = document.getElementById('form');
const userName = document.getElementById('user-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');

const pattern = {
    username: /^[A-Z](\s[A-Z])*[a-z]+$/,
    email: /^[a-z]+([._][a-z]+)*@[a-z]+(\.)+[a-z]+$/,
    password: /^[\w]{8,}$/
}

const checkPattern = (input, pattern) => {
    return pattern.test(input.value);
};

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message; 
};

const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};


const checkInputs = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();
    if(userNameValue === '' || !checkPattern(userName, pattern['username'])) {
        setErrorFor(userName, 'Invalid Input');
    } else {
        setSuccessFor(userName);
    }
    if(emailValue == '' || !checkPattern(email, pattern['email'])) {
        setErrorFor(email, 'Invalid Input');
    } else {
        setSuccessFor(email);
    }
    if(passwordValue == '' || !checkPattern(password, pattern['password'])) {
        setErrorFor(password, 'Invalid Input');
    } else {
        setSuccessFor(password);
    }
    if(passwordCheckValue == '' || passwordCheckValue != passwordValue) {
        setErrorFor(passwordCheck, 'Password does not match');
    } else {
        setSuccessFor(passwordCheck);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

