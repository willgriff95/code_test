import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    display: 'block',
    width: '100%'
  },
  group: {
    margin: 0,
    position: 'relative',
    padding: '20px 20px 5px 20px',
    boxShadow: '10px 4px 29px -3px rgba(0,0,0,0.11);',
    border: '#e7e7e7 solid 1px'
  },
  questionContainer: {
    boxShadow: '10px 4px 29px -3px rgba(0,0,0,0.11);',
    width: '100%',
    border: '#e7e7e7 solid 1px',
    position: 'relative',
    top: '25px',
    left: '-30px',
    zIndex: '1'
  },
  questionText: {
    width: 'calc(100% - 60px)',   
    height: '60px',
    display: 'block',
    padding: '10px 10px 10px 20px',
    boxSizing: 'border-box',
    position: 'relative',
    float: 'left',
    backgroundColor: 'white',
    lineHeight: '20px',
    fontSize: '0.875rem',
    color: 'black'
  },
  questionNumber: {
    height: '60px',
    width: '60px',
    display: 'block',
    float: 'left',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
    backgroundColor: '#0030ff',
    color: 'white'
  }
});

class Questions extends React.Component {
  render() {
    const { classes, questionData, radioButtonChange, index, questionIndex } = this.props;
    const questionNew = <div dangerouslySetInnerHTML={{__html: `<Typography>${questionData && questionData.question}</Typography>`}} />

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.questionContainer}>
            <Typography className={classes.questionNumber}>
            {(questionIndex + 1).toString().length > 1 ? 
              `${questionIndex + 1}_`
              :
              `0${questionIndex + 1}_`
          }
            </Typography>
            <div className={classes.questionText}>
                {questionNew}
            </div>
        </FormLabel>
          <RadioGroup
            aria-label={index}
            className={classes.group}
            questionnumber={index}
          >
          {questionData && questionData.answers && questionData.answers.map((answer, index) => {
            const answerNew = <div dangerouslySetInnerHTML={{__html: `<div>${answer}</div>`}} />
            return (
              <FormControlLabel 
                key={index}  
                questionnumber={index} 
                value={answer} 
                onChange={radioButtonChange} 
                control={<Radio color="primary" />} 
                label={answerNew}
              />
            )
          })}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Questions);