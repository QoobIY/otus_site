import React from 'react'



const RegisterFooter = ({switchForm, text}) => {
    return (
            <div className="register-footer">
                <a href="#" className="register-footer__text" onClick={switchForm}>{text}</a>
            </div>
    )
};

export default RegisterFooter;