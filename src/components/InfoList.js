import React from 'react';
import GridList from '@material-ui/core/GridList';
import UserInfo from './UserInfo';
import { connect } from 'react-redux';
import { useStyles } from '../styles/InfoListStyles';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';


function InfoList(props) {
    
    const classes = useStyles();

    return(

        <>
            
            <h1>User Details: </h1>
            <GridList cellHeight={200} className={classes.GridList} cols={1} rows={4}>

                {props.infoList.map(info => (
                    <UserInfo
                    key={uuidv4()}
                    name={info.name}
                    phone={info.phone}
                    />

                ))}            
                
            </GridList>
            
        </>
    )
}
InfoList.propTypes = {
    infoList: PropTypes.array
}



const mapStateToProps = state => {
    return {
        infoList: state.info
    }
}
 
export default connect(mapStateToProps)(InfoList);

