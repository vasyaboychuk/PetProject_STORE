const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const TypeBrand=sequelize.define('TypeBrand',{
     id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
});

module.exports={
    TypeBrand
}