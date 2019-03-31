import React from 'react'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    headerContainer: {
        background: '#0030ff',
    },
    headerText: {
      margin: '0 auto',
      width: '25%',
      color: 'white', 
      textAlign: 'left',
      letterSpacing: '15px',
      padding: '20px',
      lineHeight: '20px'
    }
  })

const Header = ({classes}) => (
    <div className={classes.headerContainer}>
        <Typography className={classes.headerText}>GENERAL  <br/>KNOWLEDGE_</Typography>
    </div>
);

export default withStyles(styles)(Header)