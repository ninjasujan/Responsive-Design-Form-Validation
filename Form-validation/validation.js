
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formControl = document.querySelectorAll('.form-control');
    console.log(formControl);
    formControl.forEach(control => {
        control.className = 'form-control error';
    })
})