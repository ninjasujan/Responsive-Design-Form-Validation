// Global count variables
let count = 1;

// All form references in forms array
const forms = document.querySelectorAll('form');
forms[0].className += " show-form"

// span element references
const span = document.querySelectorAll('.slider span');
span[0].className += " active-slider"

// navigation button references
const prev = document.getElementById('prev');
const next = document.getElementById('next');
prev.className = 'in-active';

const pattern = {
    username: /^[A-z_.@]{4,}$/,
    password: /^[0-9A-z]{5,}$/,
    name: /^[A-z]{2,}$/,
    email: /^[A-z\d]+([_.][A-z\d]+)*@[A-z]+(\.[A-z]+){1,}$/,
    contact: /^[0-9]{10}$/
}

const isValidRegForm = (form) => {
    const username = form.username.value;
    const password = form.password.value;
    const confirmPasswd  = form.confirmpassword.value;
    console.log(username, password, confirmPasswd);
    if(!(username != '' && pattern.username.test(username))) {
        form.username.className = 'error-input';
        return false;
    }
    if(!(password != '' && pattern.password.test(password))) {
        form.password.className = 'error-input';
        return false;
    }
    if(!(confirmPasswd != '' && password == confirmPasswd)) {
        form.confirmpassword.className = 'error-input';
        return false;
    }
    form.username.className = "";
    form.password.className = "";
    form.confirmpassword.className = "";
    return true;
};

const isValidInfoForm = (form) => {
    console.log(form);
    const name = form.name.value;
    const dob = form.dob.value;
    const nationality = form.nationality.value;
    const errorGender = document.querySelector('.gender-error');
    console.log('Gender error', errorGender);
    console.log(name, dob);
    if(!(name != '' && pattern.name.test(name))) {
        form.name.className = 'error-input';
        return false;
    }
    if(!(form.querySelector('#male').checked || form.querySelector('#female').checked)) {
        errorGender.className += ' show-error'
        return false;
    }
    if(nationality == "") {
        console.log('nationality not selected')
        form.nationality.className = 'error-input';
        return false;
    }
    if(dob == "") {
        console.log('DOB not selected...');
        form.dob.className = 'error-input';
        return false;
    }
    form.name.className = "";
    form.dob.className == "";
    form.nationality.className = "";
    errorGender.className = 'hide-error';
    document.getElementsByClassName('gender-error').className = '';
    return true;
}

const isValidContactForm = (form) => {
    const email = form.email.value;
    const phoneNumber = form.phonenumber.value;
    if(!(email != '' && pattern.email.test(email))) {
        form.email.className = 'error-input';
        return false;
    }
    if(!(phoneNumber != '' && pattern.contact.test(phoneNumber))) {
        form.phonenumber.className = 'error-input';
        return false;
    }
    form.email.className = "";
    form.phonenumber.className = "";
};  

next.addEventListener('click', (e) => {
    if(count == 1 && isValidRegForm(forms[count - 1]) == false) return;
    if(count == 2 && isValidInfoForm(forms[count - 1]) == false) return;
    if(count == 3 && isValidContactForm(forms[count - 1]) == false) return; 
    count += 1;
    prev.className = 'active';
    span.forEach(point => {
        if(point.className <= count) point.className += ' active-slider';
    });
    if(count == 4) e.target.className = 'in-active';
    forms.forEach(form => {
        form.className = "";
    });
    forms[count - 1].className = 'show-form';
});

prev.addEventListener('click', (e) => {
    next.className = 'active';
    count -= 1;
    span.forEach(point => {
        const pointVal = point.className.split(" ")[0];
        if(pointVal > count && pointVal > 1) {
            point.className = pointVal;
        }
    });
    if(count == 1) e.target.className = 'in-active';
    forms.forEach(form => {
        form.className = "";
    })
    forms[count - 1].className = 'show-form';
    
});







