import Button from "../components/subcomponents/Button";
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import "../styles/UserInputStyles.css"
import { connect } from 'react-redux';
import { addInfo } from '../redux/reducers/index';
import { v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';
import styles from '../styles/UserInputStyles';
import treeLeafLogo from "../assets/images/Treeleaf-logo.png";
import DatePicker from 'react-date-picker';
// import axios from 'axios';


function UserInput(props) {

    const { classes } = props;
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail]  = useState("");
    const [dob, setDob] = useState(new Date());
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("");
    // const [countries, setCountries] = useState([]);

    const onNameChanged = e => setName(e.target.value);
    const onPhoneChanged = e =>  setPhone(e.target.value);   
    const onEmailChanged = e => setEmail(e.target.value);
    // const onDobChanged = e => setDob(e.target.value);
    const onCityChanged = e => setCity(e.target.value);
    const onDistrictChanged = e => setDistrict(e.target.value);
    const onProvinceChanged = e => setProvince(e.target.value);
    const onCountryChanged = e => setCountry(e.target.value);

    const handleAddInfo = e => {
        e.preventDefault();
        let newInfo = {
            "id": uuidv4(),
            "name": name,
            "phone": phone,
            "email": email,
            "dob": dob,
            "city": city,
            "district": district,
            "province": province,
            "country": country
            
        }
        //dispatches actions to add info
        props.addInfo(newInfo);
        setName("");
        setPhone("");
        setEmail("");
        setCity("");
        setDistrict("");
        setProvince("");
        setCountry("");
        
    }

    // useEffect(async () => {
    //     // let countries = [];
    //     const url="https://api.first.org/data/v1/countries";
    //     const response = await axios(url);
    //     const result = response.data;
    //     console.log(result.data);
    //     const cntr= Object.values(result.data).forEach(val => {
    //         console.log(val.country);
    //         return val.country;

    //     }) 
    //     setCountries([...countries, cntr])
    //     console.log(countries);
        
        
    // })

    // let optionItems = Object.values(countries).forEach(country => 
    //     <option key={uuidv4()}>{country}</option>
        
    //     )
    
    

   

    return (
        <div className={classes.Registration}>
            <div className={classes.logo}>
                <img className={classes.logoImg} src={treeLeafLogo} alt="logo"/>
            </div>

              
                    <div className={classes.title}>User Registration</div>
                    <div className={classes.subTitle}>Fill up your Personal details below</div>
                    <div className={classes.input}>
                        
                        <div className={classes.inputNameDiv}>
                            <input className={classes.inputName} 
                            placeholder="Name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={onNameChanged}
                            required
                            />
                        </div>                        
                        <div className={classes.inputEmailDiv}>
                            <input className={classes.inputEmail}  type="text"
                                name="email"
                                value={email}
                                onChange={onEmailChanged}
                                placeholder="Email."
                                required/>
                        </div>
                        <div className={classes.inputPhoneDiv}>
                            <input className={classes.inputPhone} type="text"
                                name="phone"
                                value={phone}
                                onChange={onPhoneChanged}
                                pattern="^\d{5,}$"
                                placeholder="Phone no."
                                required/>
                        </div>
                        <p className={classes.dateOfBirth}>Date Of Birth.:</p>
                        <DatePicker
                            onChange={setDob}
                            value={dob}
                        />
                        
                        <div className={classes.address}>
                            <div className={classes.upTwo}>
                                
                                <div className={classes.inputCityDiv}>
                                    <input className={classes.inputCity} type="text"
                                        name="city"
                                        value={city}
                                        onChange={onCityChanged}
                                        placeholder="City"/>
                                </div>
                               
                                <div className={classes.inputDistrictDiv}>
                                    <input className={classes.inputDistrict} type="text"
                                        name="district"
                                        value={district}
                                        onChange={onDistrictChanged}
                                        placeholder="District"/>
                                </div>
                            </div>
                           
                                <div className={classes.inputProvinceDiv}>
                                    <input className={classes.inputProvince} type="text"
                                        name="Province"
                                        value={province}
                                        onChange={onProvinceChanged}
                                        placeholder="Province"/>
                                </div>
                                <p className={classes.countryLabel}>Country: </p>
                                <select className={classes.country}onChange={onCountryChanged}>
                                    {/* {optionItems} */}
                                </select>
                                {/* <div className={classes.inputCountryDiv}>
                                    <input className={classes.inputCountry} type="text"
                                        name="Country"
                                        value={country}
                                        onChange={onCountryChanged}
                                        placeholder="Country"/>
                                </div> */}
                            <div className={classes.downTwo}>

                            </div>

                        </div>
                    </div>
                    <div className="buttons">
                        <Button  
                            onClick={handleAddInfo}
                            buttonText={"Register"}
                            top={"500px"} 
                            left={"137px"} 
                            width={"302px"}
                            textTop={"-13px"}
                            textLeft={"90px"}
                            textWidth={"117px"}
                            textHeight={"17px"}                            

                        />
                    </div>
                </div>
    )
}

UserInput.propTypes = {
    classes: PropTypes.className,
    addInfo: PropTypes.func
}

const mapDispatchToProps = dispatch => {
    return {
        addInfo: newInfo => dispatch(addInfo(newInfo))
    }
}


export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(UserInput));