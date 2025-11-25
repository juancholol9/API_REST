const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parts', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    part_number: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: "part_number"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    manufacturer: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    supplier_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'suppliers',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'parts',
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
        name: "part_number",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "part_number" },
        ]
      },
      {
        name: "idx_parts_part_number",
        using: "BTREE",
        fields: [
          { name: "part_number" },
        ]
      },
      {
        name: "supplier_id",
        using: "BTREE",
        fields: [
          { name: "supplier_id" },
        ]
      },
    ]
  });
};
