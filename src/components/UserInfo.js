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
    const name = props.info.name;
    const email = props.info.email;
    const phone = props.info.phone;
    const dob = props.info.dob;
    const city = props.info.address.city;
    const district = props.info.address.district;
    const province = props.info.address.province;
    const country = props.info.address.country;

    return(
        <div>
            <GridListTile  cols={1}>
                <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Name: {name}
                    </Typography>
                    <Typography variant="h6" component="h2">
                    email: {email}
                    </Typography>
                    <Typography variant="h6" component="h2">
                    Phone No.: {phone}
                    </Typography>
                    <Typography variant="h6" component="h2">
                    DOB: {dob}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    Address: 
                    </Typography>
                    <Typography variant="body2" component="p">
                    City: {city}
                    <br />
                    District: {district}
                    <br/>
                    Province: {province}
                    <br/>
                    Country: {country}
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
    info: PropTypes.object
}

