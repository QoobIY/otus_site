import React from 'react'



const RegisterFooter = ({switchForm, show}) => {
    return (
            <div className="register-footer">
                <button className="register-footer__text" onClick={switchForm}>
                    {show === 'register' ? 'Авторизация' : 'Впервые на сайте?'}
                </button>
            </div>
    )
};

export default RegisterFooter;