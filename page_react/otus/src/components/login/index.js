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
        }
    }

    switchForm = (ev) => {
        let newState;
        if (ev.target) {
            newState = this.state.show === 'register' ? 'login' : 'register';
        } else {
            newState = ev;
        }
        this.setState({
            show: newState,
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
                <RegisterFooter switchForm={this.switchForm} show={this.state.show}/>
            </div>
        )
    }

}