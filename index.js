const express = require('express');
const path = require('path');
const app = express();
var _ = require('lodash');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/questions', (req,res) => {
    const questions = require('./JSON/Questions.json');
    // using lodash chunks to prep the data for pagination
    // const questionArrayChunks = _.chunk(questionArray.results, 3)
    res.json(questions);
    console.log('Questions Retrieved');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);