import React from 'react'
import '../../styles/ShowInfoCard.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteInfo, editInfo } from '../../redux/reducers/index';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import EditForm from '../EditForm';


function ShowInfoCard(props) {

    const [isEditing, setEdit] = useState(false);

    const date = props.dob.getDate();
    const month = props.dob.getMonth();
    const year = props.dob.getYear(); 

    const handleDelete = () => {
        props.deleteInfo(props.id)
    }

    const handleEdit = () => {
        setEdit(true);

    }

    const cancelEdit = () => {
        setEdit(false);
    }

    const editInfo = (newInfo) => {
        let setInfo = {
            "id": props.id,
            "name": newInfo.name,
            "phone": newInfo.phone,
            "email": newInfo.email,
            "dob": "",
            "city": props.city,
            "district": props.district,
            "province": props.province,
            "country": props.country
            
        };
        props.editInfo(setInfo, props.id);
    }

       

    if(!isEditing) {
        return(
            <div className="infoCard">
            <div className="col1">
            <h1>Your Info: </h1>
                <h2>Name: {props.name}</h2>
                <h3>Email: {props.email}</h3>
                <h3>Phone no. : {props.phone}</h3>
                <h3>Date of Birth : {date}/{month}/{year}</h3>
            </div>
                
            <div className="col2">
            <h2>Address: </h2>
            <p>City: {props.city}</p>
            <p>District: {props.district}</p>
            <p>Province: {props.province}</p>
            <p>Country: {props.country}</p>
                
            </div>
            <div className="col3">
            <div className="button edit" onClick={handleEdit}>
                <p className="button-text">Edit</p>
            </div>
            <div className="button delete" onClick={handleDelete}>
                <p className="button-text">Delete</p>
            </div>
            </div>

            <Link  to={{
                    pathname: `/profile/${props.name}`,
                    state: { info: props.info }
                }}>Go to Profile</Link>    
            </div>
        )
    } 
    return (
        <EditForm handleCancel={cancelEdit} id={props.id} editInfo={editInfo}/>

    )
        
}

ShowInfoCard.propTypes = {
    info: PropTypes.object,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.string,
    city: PropTypes.string,
    district: PropTypes.string,
    province: PropTypes.string,
    country: PropTypes.string,
    id: PropTypes.string,
    deleteInfo: PropTypes.func,
    editInfo: PropTypes.func
}

const mapDispatchToProps = dispatch => {
    return{
        deleteInfo: id => dispatch(deleteInfo(id)),
        editInfo: (showInfo, id) => dispatch(editInfo(showInfo, id))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ShowInfoCard);
