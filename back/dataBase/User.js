const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const {Basket} = require("./Basket");
const {Rating} = require("./Rating");
const {OAuth} = require("./OAuth");


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,require:true},
    password: {type: DataTypes.STRING,require: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"},

})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

User.hasOne(OAuth);
OAuth.belongsTo(User)

module.exports = {
    User
}