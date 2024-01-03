const { Model, DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/connection');

class FizzBuzz extends Model { };

FizzBuzz.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true
            },
        },
        usernameId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'fizzBuzz',
    }
);

module.exports = FizzBuzz;