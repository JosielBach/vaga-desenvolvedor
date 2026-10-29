const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: { type: DataTypes.STRING(150), allowNull: false },
        cpf: { type: DataTypes.CHAR(11), allowNull: false },
        email: { type: DataTypes.STRING(255), allowNull: false },
      },
      { sequelize, tableName: 'customers', paranoid: true },
    );
  }

  static associate(models) {
    this.hasMany(models.Order, { foreignKey: 'customerId', as: 'orders' });
  }
}

module.exports = Customer;
