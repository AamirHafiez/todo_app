const express = require('express');
const port = 8000;

const app = express();

// setting up view engine and ejs template
app.set('view engine', 'ejs');
app.set('views', './views');

// load router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Oops!! Servers couldn't start: ${err}`);
        return;
    }
    console.log('Yipee!! Server is up and running');
});