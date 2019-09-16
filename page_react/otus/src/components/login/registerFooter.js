import React from 'react'
import {connect} from "react-redux";
import {showLogin, showRegister} from "../../actions";


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

const mapStateToProps = ({loginReducter}) => {
    return {
        show: loginReducter.show
    };
};

const mapDispatchToProps = {
  showLogin, showRegister
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFooter);