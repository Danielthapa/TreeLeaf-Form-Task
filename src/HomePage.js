import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InfoForm from './components/InfoForm';
import InfoList from './components/InfoList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#02044A",
        maxHeight: "100vh",
        maxWidth: "100vw"
    },
    page: {
        maxHeight: "600px"

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: "5px",
    },
}))


export default function HomePage() {
    const classes = useStyles();

    
        return(
            <div className={classes.root}>
                <Grid className={classes.page} container spacing={5}>
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

