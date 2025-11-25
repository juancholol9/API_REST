const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pickup_schedules', {
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
      },
      unique: "pickup_schedules_ibfk_1"
    },
    scheduled_pickup_at: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    pickup_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pickup_status: {
      type: DataTypes.ENUM('scheduled','completed','cancelled'),
      allowNull: true,
      defaultValue: "scheduled"
    }
  }, {
    sequelize,
    tableName: 'pickup_schedules',
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
        name: "appointment_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "appointment_id" },
        ]
      },
    ]
  });
};
