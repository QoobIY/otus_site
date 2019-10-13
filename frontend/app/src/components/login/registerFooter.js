import React from 'react';
import T from "prop-types";

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
    show: T.string.isRequired,
    showRegister: T.func.isRequired,
    showLogin: T.func.isRequired,
};

export default RegisterFooter