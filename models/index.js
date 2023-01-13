const User = require('./User');
const Product = require('./Product');
const History = require('./History');

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});

History.belongsTo(User, Product, {
  foreignKey: 'user_id'
});

module.exports = { User, Product, History };