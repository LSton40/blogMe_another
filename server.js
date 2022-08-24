const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const PORT = process.env.PORT || 5309;
const db = require('./config/connection');

const session = require('express-session');
const SeqStorage = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

const {route_views, authentication} = require('./controllers');

const app = express();

app.use(express.static(path.join('front')));
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: process.env.SECRET_SESH,
    store: new SeqStorage({db}),
    saveUninitialized: false,
    resave: false,
    // cookie: {
    //     //httpOnly: true
    // }
}));

app.use('/', route_views);
app.use('/auth', authentication);

db.sync({force: false}).then(() => {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`)
        });
    });