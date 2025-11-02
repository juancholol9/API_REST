const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        // REMOVE THIS LINE:
        // defaultValue: DataTypes.INTEGER
    },
    full_name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: "email"
    },
    password_hash: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('client', 'mechanic', 'admin'),
        allowNull: false
    },
    metadata: {
        type: DataTypes.JSON,
        allowNull: true
    },
}, {
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    underscored: true,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }]
        },
        {
            name: "email",
            unique: true,
            using: "BTREE",
            fields: [{ name: "email" }]
        },
        {
            name: "idx_users_role",
            using: "BTREE",
            fields: [{ name: "role" }]
        }
    ]
});

module.exports = Users;
