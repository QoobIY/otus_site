import './style.scss';

const getCookie = name => {

    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined
},
    AUTH_TEXT = 'Авторизация',
    REGISTER_TEXT = 'Впервые на сайте?';

const buttonSwitch = document.querySelector('.register-footer__text'),
    registerForm = document.querySelector('.register-form'),
    loginForm = document.querySelector('.login-form');

const OpenRegister = () => {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
    buttonSwitch.innerText = AUTH_TEXT;
};

const OpenLogin = () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    buttonSwitch.innerText = REGISTER_TEXT;
};


registerForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const data = new FormData(this),
        errors = this.querySelector('.errors');
    errors.innerHTML = '';
    fetch(this.action, {
        body: data,
        method: this.method.toUpperCase(),
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        }
    })
        .then( ans => ans.json())
        .then( res => {
            if(res.success) {
                alert('Успешная регистрация');
                OpenLogin();
            } else {
                for(let e in res.errors){
                    if(res.errors.hasOwnProperty(e)){
                        const err = res.errors[e],
                            d = document.createElement('div');
                        d.innerText = e + ': ' + err;
                        console.log(errors, d);
                        errors.appendChild(d);
                    }
                }
            }
        });

});
loginForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const data = new FormData(this),
        errors = this.querySelector('.errors');
    fetch(this.action, {
        body: data,
        method: this.method.toUpperCase(),
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        }
    })
        .then( ans => ans.json())
        .then( res => {
            if(res.success) {
                document.location.href = '/courses2.html';
            } else {
                alert('Неверный логин или пароль');
            }
        });
});

document.querySelector('.register-footer__text').addEventListener('click', ev => {
    ev.preventDefault();
    if(buttonSwitch.innerText === REGISTER_TEXT){
        OpenRegister();
    } else {
        OpenLogin();
    }
});