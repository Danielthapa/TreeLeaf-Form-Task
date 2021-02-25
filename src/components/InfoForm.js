import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addInfo } from '../redux/reducers/index';
import { useStyles } from '../styles/InfoFormStyles';
import PropTypes from 'prop-types';

function InfoForm(props) {


    const classes = useStyles();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const onNameChanged = e => setName(e.target.value);
    const onPhoneChanged = e => setPhone(e.target.value);

    const handleAddInfo = e => {
        e.preventDefault();
        let newInfo = {
            "name": name,
            "phone": phone
        }
        //dispatches actions to add info
        props.addInfo(newInfo);
        setName("");
        setPhone("");
    }


    return(
        <div className={classes.infoForm}>
            <h1>Add your Personal Details: </h1>
            <form > 
                <label>Name:</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={onNameChanged}
                    placeholder="Name"
                />
                <label>Phone no. :</label>
                <input 
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={onPhoneChanged}
                    placeholder="Phone no."
                />
                <button type="submit" onClick={handleAddInfo}>Submit</button>
            </form>
        </div>
    )
}

InfoForm.propTypes = {
    addInfo: PropTypes.func
}

const mapStateToProps = state => {
    return {
        name: state.info.name
    }
        
    
}

const mapDispatchToProps = dispatch => {
    return {
        addInfo: newInfo => dispatch(addInfo(newInfo))
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
) (InfoForm);