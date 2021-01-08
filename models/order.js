"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      shippingAddress1: DataTypes.STRING,
      shippingAddress2: DataTypes.STRING,
      city: DataTypes.STRING,
      zip: DataTypes.STRING,
      country: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      status: DataTypes.STRING,
      totalPrice: DataTypes.INTEGER,
      user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
