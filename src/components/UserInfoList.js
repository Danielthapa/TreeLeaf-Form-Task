import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowInfoCard from './subcomponents/ShowInfoCard';
import "../styles/UserInfoListStyle.css"

function UserInfoList(props) {

    return(
        <div className="InfoList">
             {props.infoList.map(info => (

                    <ShowInfoCard
                    info={info}
                    id={info.id}
                    key={info.id}
                    name={info.name}
                    phone={info.phone}
                    email={info.email}
                    dob={info.dob}
                    city={info.city}
                    province={info.province}
                    district={info.district}
                    country={info.country}
                    />

                ))} 
            
            
        </div>
    )

}

UserInfoList.propTypes = {
    infoList: PropTypes.array
}



const mapStateToProps = state => {
    return {
        infoList: state.info
    }
}

export default connect(
    mapStateToProps
)(UserInfoList);