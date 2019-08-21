import React from 'react'
import './style.scss'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'
import RegisterFooter from "./registerFooter";

const AUTH_TEXT = 'Авторизация',
    REGISTER_TEXT = 'Впервые на сайте?';
export default class Promo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 'login'
        }
    }


    switchForm = (ev) => {
        let new_state;
        if (ev.target) {
            new_state = this.state.show === 'register' ? 'login' : 'register';
            if (new_state === 'register') {
                ev.target.innerText = AUTH_TEXT;
            } else {
                ev.target.innerText = REGISTER_TEXT;
            }
        } else {
            new_state = ev;
        }

        this.setState({
            show: new_state
        });
    };

    render() {
        return (
            <div className="content">
                {
                    this.state.show === 'login' && <LoginForm/>
                }
                {
                    this.state.show === 'register' && <RegisterForm switchForm={this.switchForm}/>
                }
                <RegisterFooter switchForm={this.switchForm}/>
            </div>
        )
    }

}