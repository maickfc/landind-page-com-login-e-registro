const caixaDeLogin = document.querySelector('.caixa-de-login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnlogin');
const iconeX = document.querySelector('.icone-x');

registerLink.addEventListener('click', ()=> {
    caixaDeLogin.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    caixaDeLogin.classList.remove('active');
});

btnLogin.addEventListener('click', ()=> {
    caixaDeLogin.classList.add('active-login');
});

iconeX.addEventListener('click', ()=> {
    caixaDeLogin.classList.remove('active-login');
});