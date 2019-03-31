import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography, Paper } from '@material-ui/core';
  
  function getModalStyle() {
    return {
      top: '40%',
      left: '35%',
      transform: `translate(-35%%, -35%)`,
    };
  }
  
  const styles = theme => ({
    paper: {
      textAlign: 'center',
      position: 'relative',
      width: theme.spacing.unit * 50,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
      backgroundColor: '#0030ff',
      border: '10px solid white',
      color: 'white'
    },
    score: {
      fontSize: '50px',
      color: 'white',
      fontWeight: 'bold'
    },
    correctAndIncorrect: {
      fontSize: '12px',
      color: 'white'
    },
    yourScoreContainer: {
      borderRadius: 0,
      boxShadow: 'none',
      padding: '20px',
      color: '#0030ff',
      letterSpacing: '15px',
      position: 'absolute',
      width: '80%',
      top: '-20%'
    },
    yourScoreText: {
      fontWeight: 'bold',
      color: '#0030ff'
    }
  });

  
const SimpleModal = ({classes, state, handleClose, handleOpen}) => {
    return (
        <div>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={state && state.modalOpen}
            onClose={handleClose}
            >
            <div style={getModalStyle()} className={classes.paper}>
            <Paper className={classes.yourScoreContainer}>
              <Typography className={classes.yourScoreText}>
                YOUR SCORE
              </Typography>
            </Paper>
              <Typography className={classes.score}>
                  {state && state.totalIncorrect_answers * 3}
              </Typography>
              <Typography className={classes.correctAndIncorrect}>
                  {state && state.totalIncorrect_answers} Correct
              </Typography>
              <Typography className={classes.correctAndIncorrect}>
                  {state && state.totalCorrect_answers} Incorrect
              </Typography>
              <SimpleModalWrapped />
            </div>
            </Modal>
        </div>
    )
}

SimpleModal.propTypes = {   
    classes: PropTypes.object.isRequired,
  };
  
  const SimpleModalWrapped = withStyles(styles)(SimpleModal);

  
export default SimpleModalWrapped;
