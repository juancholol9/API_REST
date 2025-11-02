const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appointment_status_updates', {
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
    status: {
      type: DataTypes.ENUM('scheduled','checked_in','in_progress','awaiting_approval','on_hold','completed','cancelled'),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    details: {
      type: DataTypes.JSON,
      allowNull: true
    },
    created_by: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'appointment_status_updates',
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
        name: "idx_status_updates_appointment_id_created_at",
        using: "BTREE",
        fields: [
          { name: "appointment_id" },
          { name: "created_at" },
        ]
      },
      {
        name: "created_by",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
    ]
  });
};
