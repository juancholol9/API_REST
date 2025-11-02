const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicles', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    owner_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    make: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    year: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    vin: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: "vin"
    },
    license_plate: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    vehicle_meta: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vehicles',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "vin",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vin" },
        ]
      },
      {
        name: "idx_vehicles_owner_id",
        using: "BTREE",
        fields: [
          { name: "owner_id" },
        ]
      },
      {
        name: "idx_vehicles_vin",
        using: "BTREE",
        fields: [
          { name: "vin" },
        ]
      },
    ]
  });
};
