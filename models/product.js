"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
      }),
        Product.belongsTo(models.Brand, {
          as: "brand",
          foreignKey: "brandId",
        });
      Product.hasMany(models.Photos);
      Product.hasMany(models.OrderItem);
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      brandId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      countInStock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
