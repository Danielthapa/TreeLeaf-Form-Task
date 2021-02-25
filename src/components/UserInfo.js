import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';
import { useStyles } from '../styles/UserInfoStyles';
import PropTypes from 'prop-types';



export default function UserInfo(props) {
    
    const classes = useStyles();

    return(
        <div>
            <GridListTile  cols={1}>
                <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Name: {props.name}
                    </Typography>
                    <Typography variant="h6" component="h2">
                    email: 
                    </Typography>
                    <Typography variant="h6" component="h2">
                    Phone No.: {props.phone}
                    </Typography>
                    <Typography variant="h6" component="h2">
                    DOB: 
                    </Typography>
                    <Typography variant="h5" component="h2">
                    Address: 
                    </Typography>
                    <Typography variant="body2" component="p">
                    City: 
                    <br />
                    District: 
                    <br/>
                    Province: 
                    <br/>
                    Country: 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                         
            </GridListTile>
        </div>
    )

}

UserInfo.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string
}

