import React from 'react';
import '../styles/EditForm.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { editInfo } from '../redux/reducers/index';

function EditForm(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const onNameChanged = e => setName(e.target.value);
    const onEmailChanged = e => setEmail(e.target.value);
    const onPhoneChanged = e => setPhone(e.target.value);

    const handleEditInfo = e => {
        e.preventDefault();
        const setInfo = {
            "name": name,
            "email": email,
            "phone": phone
        }
        //dispatches actions to add info
        props.editInfo(setInfo);
        setName("");
        setPhone("");
        setEmail("");
        
    }


    return(

        <div className="infoCard">
            <div className="col1">
                    <input className="nameInput"
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={onNameChanged}
                        required
                    />
                    <input className="emailInput"  type="text"
                            name="email"
                            value={email}
                            onChange={onEmailChanged}
                            placeholder="Email."
                            required/>
                    <input className="phoneInput"  type="text"
                    name="email"
                    value={phone}
                    onChange={onPhoneChanged}
                    placeholder="phone no."
                    required/>           
                
            
            
                <div className="button edit" onClick={handleEditInfo}>
                    <p className="button-text">Edit</p>
                </div>
                <div className="button delete" onClick={props.handleCancel}>
                    <p className="button-text">Cancel</p>
                </div>
            </div>
        </div>
    )
}

EditForm.propTypes = {
    handleCancel: PropTypes.func,
    id: PropTypes.string,
    editInfo: PropTypes.func,

} 

const mapDispatchToProps = dispatch => {
    return {
        editInfo: (newInfo, id) => dispatch(editInfo(newInfo, id))
    }
}


export default connect(
    null,
mapDispatchToProps)(EditForm);