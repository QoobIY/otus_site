import React from 'react'
import {post} from '../utils'
import {showLogin} from "../../actions";
import {connect} from "react-redux";

class RegisterForm extends React.Component {

    register = (ev) => {
        ev.preventDefault();
        const data = new FormData(ev.target),
            errors = ev.target.querySelector('.errors');
        errors.innerHTML = '';
        post(ev.target.action, data)
            .then(res => {
                if (res.success) {
                    alert('Успешная регистрация');
                    this.props.showLogin();
                } else {
                    for (let e in res.errors) {
                        if (res.errors.hasOwnProperty(e)) {
                            const err = res.errors[e],
                                d = document.createElement('div');
                            d.innerText = e + ': ' + err;
                            console.log(errors, d);
                            errors.appendChild(d);
                        }
                    }
                }
            });
    };

    render() {
        return (
            <>
                <form action="/api/signup" className="form register-form" method="POST" onSubmit={this.register}>
                    <div className="form__title">Регистрация</div>
                    <div className="errors"> </div>
                    <div className="form__group">
                        <label className="form__label">Логин</label>
                        <input className="form__input" type="text" name="username" />
                    </div>
                    <div className="form__group">
                        <label className="form__label">Имя</label>
                        <input className="form__input" type="text" name="first_name" />
                    </div>
                    <div className="form__group">
                        <label className="form__label">Почта</label>
                        <input className="form__input" type="text" name="email"  />
                    </div>
                    <div className="form__group">
                        <label className="form__label">Пароль</label>
                        <input className="form__input" type="password" name="password1" />
                    </div>
                    <div className="form__group">
                        <label className="form__label">Подтверждение пароля</label>
                        <input className="form__input" type="password" name="password2" />
                    </div>
                    <div className="form__group">
                        <input className="form__button" type="submit" value="Зарегестрироваться" />
                    </div>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = {
    showLogin
};

export default connect(null, mapDispatchToProps)(RegisterForm);