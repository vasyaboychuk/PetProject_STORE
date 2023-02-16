const express = require('express');
require('dotenv').config();
const sequelize = require('./dataBase/db')
const config = require('./configs/configs')
const models = require('./dataBase/index');


const app = express();

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(config.PORT, () => {
            console.log(`server listen ${config.PORT}`)
        })
    } catch (e) {
        console.log(e);
    }
}

start()

