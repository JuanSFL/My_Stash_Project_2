const User = require('./User');
const Product = require('./Product');
const History = require('./History');
const { hasMany } = require('./User');

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  foreignKey: 'user_id',
});

History.belongsTo(Product, {
  foreignKey: 'product_id',
});


Product.hasMany(History, {
  foreignKey: 'product_id',
});

module.exports = { User, Product, History };