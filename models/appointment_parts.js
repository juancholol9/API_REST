const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appointment_parts', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    appointment_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'appointments',
        key: 'id'
      }
    },
    part_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'parts',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    part_number: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    unit_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    supplier_info: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('proposed','approved','rejected','client_provided'),
      allowNull: false,
      defaultValue: "proposed"
    },
    requested_by: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    approved_by: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    approved_at: {
      type: DataTypes.DATE(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appointment_parts',
    timestamps: true,
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
        name: "idx_appointment_parts_appointment_id",
        using: "BTREE",
        fields: [
          { name: "appointment_id" },
        ]
      },
      {
        name: "idx_appointment_parts_status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "part_id",
        using: "BTREE",
        fields: [
          { name: "part_id" },
        ]
      },
      {
        name: "requested_by",
        using: "BTREE",
        fields: [
          { name: "requested_by" },
        ]
      },
      {
        name: "approved_by",
        using: "BTREE",
        fields: [
          { name: "approved_by" },
        ]
      },
    ]
  });
};
