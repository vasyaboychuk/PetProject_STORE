const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const BasketDevice = sequelize.define('BasketDevice', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
module.exports = {
    BasketDevice
}
