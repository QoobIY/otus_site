import React from 'react'



const RegisterFooter = (props) => {
    return (
            <div className="register-footer">
                <a href="#" className="register-footer__text" onClick={props.switchForm}>Впервые на сайте?</a>
            </div>
    )
};

export default RegisterFooter;