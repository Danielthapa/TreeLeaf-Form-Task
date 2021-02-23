import React from 'react';
import UserInfo from './UserInfo';
import GridList from '@material-ui/core/GridList';
import { useStyles } from '../styles/InfoListStyles';


export default function InfoList() {

    const classes = useStyles();

    return(

        <>
            <h1>User Details: </h1>
            <GridList cellHeight={200} className={classes.GridList} cols={1} rows={4}>
                <UserInfo/>
                <UserInfo/>
                <UserInfo/>
                <UserInfo/>
            </GridList>
            
        </>
    )
}

