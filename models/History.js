const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model {}

History.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    itemListed: {
      type: DataTypes.BOOLEAN,
    },
    itemSold: {
      type: DataTypes.BOOLEAN,
    },
    itemPurchased: {
      type: DataTypes.BOOLEAN,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'history',
  }
);

module.exports = History;