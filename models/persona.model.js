const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Person = sequelize.define("Person", {
    id: {
        type: DataTypes.iNTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    age: {
        type: DataTypes.iNTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0,
        },
    },
});

module.exports = Person;