import React from 'react';
import UserInfo from './UserInfo';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles(() => ({
    gridList: {
        width: 500,
        height: 450
    },
    
}))


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

