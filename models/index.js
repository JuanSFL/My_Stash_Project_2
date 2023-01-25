const User = require('./User');
const Product = require('./Product');
const History = require('./History');
const Cart = require('./Cart')

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

Cart.hasMany(User, {
  foreignKey: 'cart_id'
});

User.belongsTo(Cart, {
  foreignKey: 'cart_id'
});

Cart.hasMany(Product, {
  foreignKey: 'cart_id'
});

Product.belongsTo(Cart, {
  foreignKey: 'cart_id'
});

module.exports = { User, Product, History, Cart };