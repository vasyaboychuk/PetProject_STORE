const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const {Basket} = require("./Basket");
const {Rating} = require("./Rating");


const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User)

module.exports = {
    User
}