const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const {Rating} = require("./Rating");
const {BasketDevice} = require("./BasketDevice");
const {DeviceInfo} = require("./DeviceInfo");


const Device = sequelize.define('Device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
});
Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);


Device.hasMany(DeviceInfo,{as:'info'});
DeviceInfo.belongsTo(Device)


module.exports = {
    Device
}