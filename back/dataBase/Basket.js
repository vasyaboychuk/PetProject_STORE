const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const {BasketDevice} = require("./BasketDevice");

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})
Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

module.exports = {
    Basket
}