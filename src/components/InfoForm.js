import React from 'react';
import { useStyles } from '../styles/InfoFormStyles';

function InfoForm() {
    const classes = useStyles();

    return(
        <div className={classes.infoForm}>
            <h1>A form to create user info</h1>
        </div>
    )
}

export default InfoForm;