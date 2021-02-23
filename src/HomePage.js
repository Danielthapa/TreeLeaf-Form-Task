import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InfoForm from './components/InfoForm';
import InfoList from './components/InfoList';
import { useStyles } from './styles/HomePageStyles';




export default function HomePage() {
    const classes = useStyles();

    
        return(
            <div className={classes.root}>
                <Grid className={classes.homePage} container spacing={5}>
                    <Grid item xs={5}>
                        <Container max-width="md">
                            <Paper className={classes.paper}> 
                            <InfoForm/>                                
                                
                            </Paper>  

                        </Container>
                        

                    </Grid>
                    <Grid item xs={7}>
                        <InfoList/>
                                 
                    </Grid>

                </Grid>
                
                
            </div>
        )
    

}

