import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4} from 'uuid';
import infoAdded from '../redux/UserInfo';
import { useStyles } from '../styles/InfoFormStyles';

function InfoForm() {

    const dispatch = useDispatch();

    const classes = useStyles();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const onNameChanged = e => setName(e.target.value);
    const onPhoneChanged = e => setPhone(e.target.value);

    const onInfoSubmitted = () => {
        if (name && phone) {
            dispatch(
                infoAdded(
                    {
                        id: uuidv4(),
                        name: name,
                        email: "dtdaniel27@gmail.com",
                        phone: phone,
                        dob: "10 feb, 1997",
                        address: {
                            city: "birtamod",
                            district: "jhapa",
                            province: "mechi",
                            country: "nepal"
                        } 
                    }
                )
            )

            setName('');
            setPhone('');
        }
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
                <button type="submit" onClick={onInfoSubmitted}>Submit</button>
            </form>
        </div>
    )
}

export default InfoForm;