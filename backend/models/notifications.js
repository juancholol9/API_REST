const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notifications', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    appointment_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'appointments',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.ENUM('status_update','approval_request','payment_request','general'),
      allowNull: true
    },
    payload: {
      type: DataTypes.JSON,
      allowNull: true
    },
    sent_at: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    delivered_at: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    read_at: {
      type: DataTypes.DATE(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'notifications',
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
        name: "idx_notifications_user_id_sent_at",
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "sent_at" },
        ]
      },
      {
        name: "appointment_id",
        using: "BTREE",
        fields: [
          { name: "appointment_id" },
        ]
      },
    ]
  });
};
