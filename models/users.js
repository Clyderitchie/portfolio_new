const { Model, DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model { };

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'users',
    }
);

module.exports = Users