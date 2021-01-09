"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Photos.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "Photos",
      });
    }
  }
  Photos.init(
    {
      productId: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Photos",
    }
  );
  return Photos;
};
