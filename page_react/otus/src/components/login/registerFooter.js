import React from 'react'



const RegisterFooter = ({switchForm, text}) => {
    return (
            <div className="register-footer">
                <button className="register-footer__text" onClick={switchForm}>{text}</button>
            </div>
    )
};

export default RegisterFooter;