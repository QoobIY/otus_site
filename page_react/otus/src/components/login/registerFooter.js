import React from 'react';
import PropTypes from "prop-types";

const RegisterFooter = ({show, showRegister, showLogin}) => {
    const switchForm = () => show === 'register' ? showLogin() : showRegister();
    return (
            <div className="register-footer">
                <button className="register-footer__text" onClick={switchForm}>
                    {show === 'register' ? 'Авторизация' : 'Впервые на сайте?'}
                </button>
            </div>
    )
};

RegisterFooter.propTypes = {
    show: PropTypes.string.isRequired,
    showRegister: PropTypes.func.isRequired,
    showLogin: PropTypes.func.isRequired,
};

export default RegisterFooter