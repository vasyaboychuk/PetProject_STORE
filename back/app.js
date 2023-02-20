const express = require('express');
require('dotenv').config();
const sequelize = require('./dataBase/db')
const config = require('./config/configs')
const models = require('./dataBase/index');
const fileUpload = require('express-fileupload');

const userRouter = require('./router/user.router');
const typeRouter = require('./router/type.router');
const deviceRouter = require('./router/device.router');
const brandRouter = require('./router/brand.router');
const authRouter = require('./router/auth.router');
const path = require("node:path");


const app = express();
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, "static")));
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);
app.use('/brand', brandRouter);
app.use('/type', typeRouter);
app.use('/device', deviceRouter);
app.use('/auth', authRouter);

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message: err.message || 'unknown error',
        status: err.status || 500,

    });
})



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

