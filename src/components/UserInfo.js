import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';
import { useStyles } from '../styles/UserInfoStyles';


export default function UserInfo() {

    const classes = useStyles();

    return(
        <div>
            <GridListTile  cols={1}>
                <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                    begdnevfdsfosdfsglent
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
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

