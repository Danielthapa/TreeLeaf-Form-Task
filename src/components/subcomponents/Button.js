import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../../styles/ButtonStyles';
import PropTypes from 'prop-types';



class Button extends Component {

    render() {

        const { classes, buttonText, onClick } = this.props

        return(
            <div type="submit" className={classes.button} onClick={onClick}>
                
                <p className={classes.buttonText}>{buttonText}</p>
            </div>

        )
    }
}

Button.propTypes = {
    classes: PropTypes.classes,
    iconSrc: PropTypes.src,
    iconAlt: PropTypes.string,
    buttonText: PropTypes.string,
    onClick: PropTypes.func
}

export default withStyles(styles)(Button);