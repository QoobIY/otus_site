import React from 'react'
import PropTypes from 'prop-types';
import './style.scss'

export default class ProfileInput extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            edit: false,
            editText: 'EDIT'
        }
    }

    editField = () => {
        const editText = this.state.editText === 'EDIT' ? 'SAVE' : 'EDIT';
        if(this.state.edit){
            this.props.saveValue(this.props);
        }
        this.setState({
            edit: !this.state.edit,
            editText
        })
    };


    render() {
        const {edit, editText} = this.state,
        {name, type, value, label, changeValue} = this.props;
        return (
            <div className="editable">
                <label className="editable__label">{label}: </label>
                <input className="editable__input" disabled={!edit} name={name} type={type} value={value} onChange={changeValue}/>
                <button className="editable__button" onClick={this.editField}>{editText}</button>
            </div>
        )
    }

}

ProfileInput.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
};