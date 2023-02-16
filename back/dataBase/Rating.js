const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Rating = sequelize.define('Rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})
module.exports = {
    Rating
}
