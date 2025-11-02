const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appointments', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    vehicle_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'vehicles',
        key: 'id'
      }
    },
    mechanic_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    service_type: {
      type: DataTypes.ENUM('oil_change','inspection','repair','other'),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('scheduled','checked_in','in_progress','awaiting_approval','on_hold','completed','cancelled'),
      allowNull: false,
      defaultValue: "scheduled"
    },
    scheduled_at: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    estimated_end_at: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    price_estimate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pickup_scheduled_at: {
      type: DataTypes.DATE(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appointments',
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
        name: "idx_appointments_client_id",
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "idx_appointments_mechanic_id",
        using: "BTREE",
        fields: [
          { name: "mechanic_id" },
        ]
      },
      {
        name: "idx_appointments_scheduled_at",
        using: "BTREE",
        fields: [
          { name: "scheduled_at" },
        ]
      },
      {
        name: "idx_appointments_status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "vehicle_id",
        using: "BTREE",
        fields: [
          { name: "vehicle_id" },
        ]
      },
    ]
  });
};
