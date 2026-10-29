const { Model, DataTypes } = require('sequelize');
const OrderStatus = require('../../../domain/enums/OrderStatus');

class Order extends Model {
  static init(sequelize) {
    return super.init(
      {
        customerId: { type: DataTypes.INTEGER, allowNull: false },
        orderDate: { type: DataTypes.DATE, allowNull: false },
        status: {
          type: DataTypes.ENUM(...Object.values(OrderStatus)),
          allowNull: false,
          defaultValue: OrderStatus.OPEN,
        },
        discount: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0 },
      },
      { sequelize, tableName: 'orders' },
    );
  }

  static associate(models) {
    this.belongsTo(models.Customer, { foreignKey: 'customerId', as: 'customer' });
    this.hasMany(models.OrderItem, { foreignKey: 'orderId', as: 'items' });
  }
}

module.exports = Order;
