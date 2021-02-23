import { makeStyles } from '@material-ui/core/styles';

export  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#02044A",
        maxHeight: "100vh",
        maxWidth: "100vw"
    },
    homePage: {
        maxHeight: "600px"

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: "5px",
        position: 'fixed'
    },
}))