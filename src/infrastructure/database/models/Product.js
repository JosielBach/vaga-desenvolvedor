const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    return super.init(
      {
        sku: { type: DataTypes.STRING(100), allowNull: false },
        title: { type: DataTypes.STRING(100), allowNull: false },
        price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        stock: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      },
      { sequelize, tableName: 'products', paranoid: true },
    );
  }

  static associate(models) {
    this.hasMany(models.OrderItem, { foreignKey: 'productId', as: 'orderItems' });
  }
}

module.exports = Product;
