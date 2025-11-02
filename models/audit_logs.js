const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_logs', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    entity_type: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    entity_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    action: {
      type: DataTypes.ENUM('create','update','delete'),
      allowNull: false
    },
    diff: {
      type: DataTypes.JSON,
      allowNull: true
    },
    performed_by: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'audit_logs',
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
        name: "performed_by",
        using: "BTREE",
        fields: [
          { name: "performed_by" },
        ]
      },
    ]
  });
};
