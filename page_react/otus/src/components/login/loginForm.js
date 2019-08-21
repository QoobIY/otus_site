import React from 'react'
import {post} from '../utils'

const login = (ev) => {

    ev.preventDefault();
    const data = new FormData(ev.target);

    post(ev.target.action, data).then( res => {
        if(res.success) {
            document.location.href = '/courses2.html';
        } else {
            alert('Неверный логин или пароль');
        }
    });

};

const LoginForm = () => {

    return (
        <form action="/api/auth" className="form login-form" method="POST" onSubmit={login}>
            <div className="form__title">Авторизация</div>
            <div className="form__group">
                <label className="form__label">Логин</label>
                <input className="form__input" type="text" name="username"/>
            </div>
            <div className="form__group">
                <label className="form__label">Пароль</label>
                <input className="form__input" type="password" name="password"/>
            </div>
            <div className="form__group">
                <input className="form__button" type="submit" value="Войти"/>
            </div>
        </form>
    )
};

export default LoginForm;