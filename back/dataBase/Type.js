const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const {Device} = require("./Device");
const {Brand} = require("./Brand");
const {TypeBrand} = require("./TypeBrand");

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

Type.hasMany(Device);
Device.belongsTo(Type);

Type.belongsToMany(Brand,{through:TypeBrand});
Brand.belongsToMany(Type,{through:TypeBrand});

module.exports = {
    Type
}

