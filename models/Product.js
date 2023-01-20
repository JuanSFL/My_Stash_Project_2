const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // type: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // brand: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // condition: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // color: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    user_id: {
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
    modelName: 'product',
    //added comment
  }
);

module.exports = Product;
