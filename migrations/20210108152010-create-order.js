"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      shippingAddress1: {
        type: Sequelize.STRING,
      },
      shippingAddress2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      zip: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },
      totalPrice: {
        type: Sequelize.INTEGER,
      },
      user: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};
