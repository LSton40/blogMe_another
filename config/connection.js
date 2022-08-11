require('dotenv').config();
const {Sequelize} = require('sequelize');

const connect = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(
    process.env.DB, 
    process.env.USER, 
    process.env.PASSPHRASE,
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);


module.exports = connect;