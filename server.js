const express = require('express');
const db = require('./config/connection');
const path = require('path');
const PORT = process.env.PORT || 5309;

const session = require('express-session');
const SeqStorage = require('connect-session-sequelize')(session.Store);

const {routes, authentication} = require('./controllers');

const app = express();
app.use(routes);


app.use(express.static(path.join('front')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


const { engine } = require('express-handlebars');
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');


app.use(session({
    secret: process.env.SECRET_SESH,
    store: new SeqStorage({db}),
    saveUninitialized: false,
    resave: false,
    cookie: {
        //httpOnly: true
    }
}));

app.use('/', routes);
app.use('/auth', authentication);


db.sync(
    // {force: false}
)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`)
        });
    });