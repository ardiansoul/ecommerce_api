"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.User, {
        as: "address",
        foreignKey: "userId",
      });
    }
  }
  Address.init(
    {
      userId: DataTypes.INTEGER,
      addressDetail: DataTypes.STRING,
      province: DataTypes.STRING,
      district: DataTypes.STRING,
      subDistrict: DataTypes.STRING,
      posCode: DataTypes.INTEGER,
      phone: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
