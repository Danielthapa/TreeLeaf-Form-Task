import React from 'react';
import UserInfo from './UserInfo';
import GridList from '@material-ui/core/GridList';
import { useStyles } from '../styles/InfoListStyles';
import { useSelector } from 'react-redux';
import { v4 as uuidv4} from 'uuid';


export default function InfoList() {

    
    const info = useSelector(state => state.info);        
    const classes = useStyles();
    console.log(info);

    const users = info.map(user => {
        return(
            <UserInfo info={user} key={uuidv4()}/>
        )
    })

    return(

        <>
            
            <h1>User Details: </h1>
            <GridList cellHeight={200} className={classes.GridList} cols={1} rows={4}>
                {users}
                
            </GridList>
            
        </>
    )
}

