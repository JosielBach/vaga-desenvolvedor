const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: { type: DataTypes.STRING(150), allowNull: false },
        email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
        passwordHash: { type: DataTypes.STRING(255), allowNull: false },
      },
      { sequelize, tableName: 'users' },
    );
  }
}

module.exports = User;
