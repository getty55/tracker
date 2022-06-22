const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //mon

const usersRoutes = require('./routes/users-routes');
const expensesRoutes = require('./routes/expenses-routes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/api/users', usersRoutes);
app.use('/api/expenses', expensesRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Could not find that route' })
    return;
});

app.use((error, req, res, next) => {
    if (req.file) {
        fs.unlink(req.file.path, err => {
            console.log(err);
        });
    }

    if (res.headerSent) return next(error);

    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred' });
});

mongoose.connect('mongodb+srv://rafael123:pass123@cluster0.hk6ox.mongodb.net/track?retryWrites=true&w=majority')
    .then(() => { app.listen(process.env.PORT || 5000) })
    .catch(err => { console.log(err) });
