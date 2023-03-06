const sequelize = require('./db');
const {DataTypes} = require('sequelize');



const OAuth=sequelize.define('oauth',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    accessToken:{type:DataTypes.STRING},
    refreshToken:{type:DataTypes.STRING}
})


module.exports = {
    OAuth
}
