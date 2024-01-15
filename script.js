const wrepper = document.querySelector('.wrepper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', ()=> {
    wrepper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    wrepper.classList.remove('active-popup');
});

registerLink.addEventListener('click', ()=> {
    wrepper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrepper.classList.remove('active');
});

