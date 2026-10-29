const { Sequelize } = require('sequelize');
const config = require('./config/config');
const User = require('./models/User');
const Customer = require('./models/Customer');
const Product = require('./models/Product');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');

const sequelize = new Sequelize(config[process.env.NODE_ENV || 'development']);

const models = { User, Customer, Product, Order, OrderItem };

Object.values(models).forEach((model) => model.init(sequelize));
Object.values(models).forEach((model) => model.associate && model.associate(models));

module.exports = { sequelize, ...models };
