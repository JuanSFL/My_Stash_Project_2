const sequelize = require('../config/connection');
const { User, Product } = require('../models');

const userData = require('./userData.json');
const ProductData = require('./productData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const products = await Product.bulkCreate(ProductData,{

  })
  }




seedDatabase();
