import React from 'react'
import './style.scss'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'
import RegisterFooter from "./registerFooter";
import {connect} from 'react-redux';

class Promo extends React.Component {
    render() {
        return (
            <div className="content">
                {
                    this.props.show === 'login' && <LoginForm/>
                }
                {
                    this.props.show === 'register' && <RegisterForm />
                }
                <RegisterFooter />
            </div>
        )
    }
}

const mapStateToProps = ({loginReducter}) => {
    return {
        show: loginReducter.show
    };
};

export default connect(mapStateToProps)(Promo);