

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('cosec.env')) require('dotenv').config({ path: './cosec.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './diana.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v0.10.0 Public Stable',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
             },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './diana.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG}) : new Sequelize(DATABASE_URL, {logging: DEBUG})
   
};
