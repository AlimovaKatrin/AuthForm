const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routes/index');
const auth = require('./routes/auth');

const port = 3000;

const app = express();

// view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// static folder
app.use(express.static(path.join(__dirname, 'client')));

// bodyparser midlware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/auth', auth);

app.listen(port, function () {
    console.log('Server started')
});
