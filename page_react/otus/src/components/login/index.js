import React from 'react'
import './style.scss'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'
import RegisterFooter from "./registerFooter";


export default class Promo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 'login',
            text: 'Впервые на сайте?',
        }
    }


    switchForm = (ev) => {
        let new_state, text = this.state.text;
        if (ev.target) {
            new_state = this.state.show === 'register' ? 'login' : 'register';
            if (new_state === 'register') {
                text = 'Авторизация';
            } else {
                text = 'Впервые на сайте?';
            }
        } else {
            new_state = ev;
        }

        this.setState({
            show: new_state,
            text
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
                <RegisterFooter switchForm={this.switchForm} text={this.state.text}/>
            </div>
        )
    }

}