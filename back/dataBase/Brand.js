const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const {Device} = require("./Device");

const Brand = sequelize.define('Brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

Brand.hasMany(Device);
Device.belongsTo(Brand);



module.exports = {
    Brand
}
