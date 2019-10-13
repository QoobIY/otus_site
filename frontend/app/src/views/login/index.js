import React from 'react';
import T from 'prop-types';
import './style.scss';
import LoginForm from '../../components/login/loginForm';
import RegisterForm from '../../components/login/registerForm';
import RegisterFooter from "../../components/login/registerFooter";
import {connect} from 'react-redux';
import {showLogin, showRegister} from '../../actions';

class Promo extends React.Component {
    render() {
        const {show, showLogin} = this.props;
        return (
            <div className="content">
                {
                    show === 'login' && <LoginForm/>
                }
                {
                    show === 'register' && <RegisterForm showLogin={showLogin}/>
                }
                <RegisterFooter {...this.props}/>
            </div>
        )
    }
}

Promo.propTypes = {
    show: T.string.isRequired,
    showLogin: T.func.isRequired,
    showRegister: T.func.isRequired,
};

const mapStateToProps = ({loginReducter}) => ({show: loginReducter.show});

const mapDispatchToProps = {
    showLogin, showRegister
};

export default connect(mapStateToProps, mapDispatchToProps)(Promo);