import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';
import Questions from './Questions';
import SimpleModalWrapped from './Modal';
import Header from './Header'
import Footer from './Footer'
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    width: '550px',
    margin: '0 auto'
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  questions: {
    height: '100%',
    display: 'block',
    margin: '0 auto 5px auto',
    backgroundColor: 'white'
  },
  tableBody: {
    width: '50%'
  }, 
  questionsCell: {
    borderBottom: 0,
    width: '100%',
    display: 'block',
    position: 'relative',
    padding: '0 !important'
  },
  pageNav: {
  }
});

class App extends React.Component {
  state = {
    rows: [],
    page: 0,
    data: [
    ],
    selected: [],
    rowsPerPage: 3,
    modalOpen: false,
    totalIncorrect_answers: 0,
    totalCorrect_answers: 0
  }

  componentDidMount() { 
    this.getQuestions()
  }

  getQuestions = () => {

    // fetching from an api
    // fetch('https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple')

    // OR
    
    // fetching locally
    fetch('/api/questions')
    .then(res => res.json())
    .then(data => this.setState({ data: data.results }, () => {
        this.getAnswers()
    }))

  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value })
  }

  getAnswers = () => {
    
    this.state.data.forEach(((questionData, index) => {
      let answers = []
      questionData.incorrect_answers && questionData.incorrect_answers.forEach((incorrect_answer, index) => {
        answers.push(incorrect_answer)
      })
      answers.push(questionData.correct_answer)
      answers = this.shuffle(answers)
      const tempData = this.state.data  
      tempData[index].answers = answers
      this.setState({
        data: tempData
      })
    }))
  }

  shuffle = (answers) => {
    var currentIndex = answers.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = answers[currentIndex];
      answers[currentIndex] = answers[randomIndex];
      answers[randomIndex] = temporaryValue;
    }
  
    return answers;
  }

  radioButtonChange = (questionIndex, event) => {
    const tempData = this.state.data  
    tempData[questionIndex].selectedAnswer = event.target.value
    this.setState({ value: event.target.value })
    this.calculateTotalAnswers(event)
    this.checkAllquestionsAnswered()
  }

  checkAllquestionsAnswered = () => {
    let numberOfQuestions = this.state.data.length
    let allQuestionsAnswered = 0
    this.state.data.forEach((questionData) => {
      if(questionData.selectedAnswer) {
        allQuestionsAnswered ++ 
      }
    })
    if (numberOfQuestions === allQuestionsAnswered) {
      this.handleOpen()
    }
  }

  calculateTotalAnswers = (event) => {
    let totalCorrect_answers = 0
    let totalIncorrect_answers = 0
    this.state.data.forEach(((questionData, index) => {
      if(questionData.selectedAnswer === questionData.correct_answer) {
        const tempData = this.state.data  
        tempData[index].answerCorrect = true
        tempData[index].answerIncorrect = false
        this.setState({
          data: tempData
        })
      } else {
        const tempData = this.state.data  
        tempData[index].answerIncorrect = true
        tempData[index].answerCorrect = false
        this.setState({
          data: tempData
        })
      }
      if (questionData.answerCorrect){
        totalCorrect_answers ++
      } else {
        totalIncorrect_answers ++
      }
    }))

    this.setState({
      totalCorrect_answers,
      totalIncorrect_answers
    })
  }

  handleOpen = () => {
    this.setState({ modalOpen: true })
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  }


  render() {
    const { classes } = this.props;
    const { rowsPerPage, page, data } = this.state;
    return (
      <div>
        <Header />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody  className={classes.tableBody}>
            {data 
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((questionData, index) => {
              const questionIndex = page * rowsPerPage + index
                return (
                  <TableRow 
                    key={index} 
                    className={classes.questions}
                  >
                    <TableCell className={classes.questionsCell}>
                      <Questions 
                        questionData={questionData} 
                        state={this.state} 
                        value={this.state.value} 
                        radioButtonChange={(e) => this.radioButtonChange(questionIndex, e)} 
                        questionIndex={questionIndex} 
                      />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <Footer 
              data={data} 
              rowsPerPage={rowsPerPage} 
              page={page} 
              handleChangePage={this.handleChangePage}  
              handleChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Table>
          <SimpleModalWrapped 
            state={this.state} 
            handleOpen={this.handleOpen} 
            handleClose={this.handleClose}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
